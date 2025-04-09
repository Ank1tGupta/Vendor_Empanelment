from rest_framework import generics, status
from rest_framework.response import Response
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework.views import APIView
from rest_framework_simplejwt.authentication import JWTAuthentication
from django.contrib.auth import authenticate
from django_filters.rest_framework import DjangoFilterBackend
from .models import Notification, User, VendorProfile, VendorScore, Job, Review
from .serializers import NotificationSerializer, RegisterSerializer, LoginSerializer, UserSerializer, VendorProfileSerializer, VendorScoreSerializer, JobSerializer, ReviewSerializer
from .permissions import IsVendor, IsCompany
from rest_framework import filters
from rest_framework.exceptions import NotFound
from channels.layers import get_channel_layer
from asgiref.sync import async_to_sync
import stripe
from django.conf import settings

class RegisterView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = RegisterSerializer
    permission_classes = [AllowAny]

class LoginView(generics.GenericAPIView):
    serializer_class = LoginSerializer
    permission_classes = [AllowAny]

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        return Response(serializer.validated_data, status=status.HTTP_200_OK)

class UserProfileView(APIView):
    authentication_classes = [JWTAuthentication]
    permission_classes = [IsAuthenticated]

    def get(self, request):
        user = request.user
        serializer = UserSerializer(user)
        return Response(serializer.data)

class VendorOnlyView(APIView):
    authentication_classes = [JWTAuthentication]
    permission_classes = [IsVendor]

    def get(self, request):
        return Response({"message": "Welcome Vendor!"})

class CompanyOnlyView(APIView):
    authentication_classes = [JWTAuthentication]
    permission_classes = [IsCompany]

    def get(self, request):
        return Response({"message": "Welcome Company!"})

class VendorProfileView(generics.RetrieveUpdateAPIView):
    """Vendor can view and update their profile"""
    queryset = VendorProfile.objects.all()
    serializer_class = VendorProfileSerializer
    permission_classes = [IsAuthenticated, IsVendor]

    def get_object(self):
        try:
            # Retrieve the vendor profile for the authenticated user
            vendor_profile = self.request.user.vendor_profile
        except VendorProfile.DoesNotExist:
            # Create a VendorProfile if it doesn't exist
            vendor_profile = VendorProfile.objects.create(user=self.request.user)
            # Create the VendorScore when VendorProfile is created
            VendorScore.objects.create(vendor=vendor_profile)
        return vendor_profile

    def get(self, request, *args, **kwargs):
        # Retrieve the vendor profile
        vendor_profile = self.get_object()
        
        # Check if VendorScore exists, if not return a default score
        vendor_score = vendor_profile.score if vendor_profile.score else {
            'score': 0.0,
            'average_rating': 0.0,
            'total_reviews': 0
        }
        serialized_data = self.get_serializer(vendor_profile)
        return Response({
            'profile': serialized_data.data,
            'score': vendor_score
        })
    
    def update(self, request, *args, **kwargs):
        response = super().update(request, *args, **kwargs)
        vendor_profile = self.get_object()
        if vendor_profile.score:
            vendor_profile.score.update_score()  # Recalculate the score
        
        return response

class VendorListView(generics.ListAPIView):
    """Companies can view and filter vendors"""
    queryset = VendorProfile.objects.all()
    serializer_class = VendorProfileSerializer
    permission_classes = [IsAuthenticated]  # Both vendors & companies can access

    filter_backends = [DjangoFilterBackend, filters.SearchFilter]
    filterset_fields = ['location']
    search_fields = ['services_offered']

    def get_queryset(self):
        queryset = super().get_queryset()
        min_rating = self.request.query_params.get('min_rating')
        if min_rating:
            queryset = queryset.filter(score__average_rating__gte=float(min_rating))
        return queryset

class VendorScoreView(generics.RetrieveAPIView):
    queryset = VendorScore.objects.all()
    serializer_class = VendorScoreSerializer

    def get_object(self):
        vendor_profile = self.request.user.vendor_profile
        return vendor_profile.score
    
class JobCreateView(generics.CreateAPIView):
    queryset = Job.objects.all()
    serializer_class = JobSerializer
    permission_classes = [IsAuthenticated, IsCompany]

    def perform_create(self, serializer):
        # Save the job and assign the company
        serializer.save()
        job = serializer.save(company=self.request.user)

        # Create a notification entry in the database
        notification = Notification.objects.create(
            user=job.vendor.user,
            message=f"You have a new job from {self.request.user.username}!"
        )

        # Send real-time WebSocket notification
        channel_layer = get_channel_layer()
        async_to_sync(channel_layer.group_send)(
            f"user_{job.vendor.user.id}",
            {
                "type": "send_notification",
                "message": notification.message
            }
        )

class JobListView(generics.ListAPIView):
    queryset = Job.objects.all()
    serializer_class = JobSerializer
    permission_classes = [IsAuthenticated, IsVendor]

    def get_queryset(self):
        return Job.objects.filter(vendor=self.request.user.vendor_profile)

class ReviewCreateView(generics.CreateAPIView):
    queryset = Review.objects.all()
    serializer_class = ReviewSerializer
    permission_classes = [IsAuthenticated, IsCompany]

    def perform_create(self, serializer):
        serializer.save()
        review = serializer.save(company=self.request.user)
        review.vendor.score.update_score()  # Update score
        review.vendor.update_rating() 

        Notification.objects.create(
            user=review.vendor.user,
            message=f"You received a new review from {self.request.user.username}!"
        )

class NotificationListView(generics.ListAPIView):
    """List all notifications for the logged-in user"""
    serializer_class = NotificationSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        return Notification.objects.filter(user=self.request.user).order_by('-created_at')

class MarkNotificationAsReadView(generics.UpdateAPIView):
    """Mark a notification as read"""
    queryset = Notification.objects.all()
    serializer_class = NotificationSerializer
    permission_classes = [IsAuthenticated]

    def get_object(self):
        try:
            return Notification.objects.get(id=self.kwargs['pk'], user=self.request.user)
        except Notification.DoesNotExist:
            raise NotFound(detail="Notification not found", code=404)

class VendorRecommendationView(APIView):
    """Return AI-based vendor recommendations for a company"""
    permission_classes = [IsAuthenticated, IsCompany]

    def get(self, request):
        vendors = VendorProfile.objects.all()
        recommended_vendors = []

        for vendor in vendors:
            vendor.update_recommendations()
            if request.user.id in vendor.recommendations:
                recommended_vendors.append(vendor)

        serializer = VendorProfileSerializer(recommended_vendors, many=True)
        return Response(serializer.data)

stripe.api_key = settings.STRIPE_SECRET_KEY

class CreatePaymentIntentView(APIView):
    permission_classes = [IsAuthenticated]

    def post(self, request, *args, **kwargs):
        vendor_id = request.data.get("vendor_id")
        amount = request.data.get("amount")  # in cents

        if not vendor_id or not amount:
            return Response({"error": "Missing vendor_id or amount"}, status=400)

        # ✅ MOCK PAYMENT INTENT
        client_secret = f"mock_client_secret_for_vendor_{vendor_id}_amount_{amount}"

        return Response({
            "clientSecret": client_secret,
            "mock": True
        })

class VendorOnboardingStepView(APIView):
    permission_classes = [IsAuthenticated, IsVendor]

    def get(self, request):
        profile = request.user.vendorprofile
        return Response({
            'onboarding_step': profile.onboarding_step,
            'onboarding_complete': profile.onboarding_complete
        })

    def post(self, request):
        profile = request.user.vendorprofile
        step = request.data.get("step")
        completed = request.data.get("completed")

        if step is not None:
            profile.onboarding_step = step
        if completed is not None:
            profile.onboarding_complete = completed
        profile.save()

        return Response({
            "status": "updated",
            "step": profile.onboarding_step,
            "completed": profile.onboarding_complete
        })