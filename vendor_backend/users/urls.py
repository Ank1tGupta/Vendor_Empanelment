from django.urls import path
from .views import MarkNotificationAsReadView, NotificationListView, RegisterView, LoginView, UserProfileView, VendorOnboardingStepView, VendorRecommendationView
from .views import VendorOnlyView, CompanyOnlyView, VendorProfileView, VendorListView, VendorScoreView, JobCreateView, JobListView, ReviewCreateView, CreatePaymentIntentView

urlpatterns = [
    path('register/', RegisterView.as_view(), name='register'),
    path('login/', LoginView.as_view(), name='login'),
    path('profile/', UserProfileView.as_view(), name='profile'),
    path('vendor/', VendorOnlyView.as_view(), name='vendor-only'),
    path('company/', CompanyOnlyView.as_view(), name='company-only'),
    path('vendor/profile/', VendorProfileView.as_view(), name='vendor-profile'),
    path('company/vendors/', VendorListView.as_view(), name='vendor-list'),
    path('vendor/score/', VendorScoreView.as_view(), name='vendor-score'),
    path('company/job/', JobCreateView.as_view(), name='create-job'),
    path('vendor/jobs/', JobListView.as_view(), name='vendor-jobs'),
    path('company/review/', ReviewCreateView.as_view(), name='create-review'),
    path('notifications/', NotificationListView.as_view(), name='notifications'),
    path('notifications/<int:pk>/read/', MarkNotificationAsReadView.as_view(), name='mark-notification-read'),
    path('company/recommendations/', VendorRecommendationView.as_view(), name='vendor-recommendations'),
    path('jobs/', JobCreateView.as_view(), name='create-job'),
    path('payments/create-intent/', CreatePaymentIntentView.as_view(), name='create-payment-intent'),
    path('vendor/onboarding/', VendorOnboardingStepView.as_view(), name='vendor-onboarding'),
]
