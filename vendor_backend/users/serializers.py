from rest_framework import serializers
from django.contrib.auth import get_user_model
from .models import Job, Notification, Review, VendorProfile, VendorScore
from rest_framework_simplejwt.tokens import RefreshToken

User = get_user_model()

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'email', 'role']

class RegisterSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True, min_length=6)

    class Meta:
        model = User
        fields = ['id', 'username', 'email', 'password', 'role']

    def create(self, validated_data):
        user = User.objects.create_user(
            username=validated_data['username'],
            email=validated_data['email'],
            password=validated_data['password'],
            role=validated_data['role']
        )
        return user

class LoginSerializer(serializers.Serializer):
    username = serializers.CharField()
    password = serializers.CharField(write_only=True)

    def validate(self, data):
        user = User.objects.filter(username=data['username']).first()
        if user and user.check_password(data['password']):
            refresh = RefreshToken.for_user(user)
            return {
                'access': str(refresh.access_token),
                'refresh': str(refresh),
                'user': UserSerializer(user).data
            }
        raise serializers.ValidationError("Invalid credentials")

class VendorProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = VendorProfile
        fields = "__all__"
        read_only_fields = ["user", "rating"]

class VendorScoreSerializer(serializers.ModelSerializer):
    class Meta:
        model = VendorScore
        fields = ['average_rating', 'total_reviews', 'score']

class JobSerializer(serializers.ModelSerializer):
    class Meta:
        model = Job
        fields = ['vendor', 'company', 'job_description', 'status', 'created_at']
        extra_kwargs = {'company': {'required': False}}  # Make the company field optional

    def create(self, validated_data):
        # Automatically assign the company (logged-in user)
        user = self.context['request'].user
        validated_data['company'] = user
        return super().create(validated_data)

class ReviewSerializer(serializers.ModelSerializer):
    class Meta:
        model = Review
        fields = ['vendor', 'company', 'comment', 'rating', 'created_at']
        extra_kwargs = {'company': {'required': False}}

    def create(self, validated_data):
        # Automatically assign the company (logged-in user)
        user = self.context['request'].user
        validated_data['company'] = user
        return super().create(validated_data)

class NotificationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Notification
        fields = ['id', 'user', 'message', 'created_at', 'is_read']
