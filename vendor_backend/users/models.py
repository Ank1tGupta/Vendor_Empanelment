from django.contrib.auth.models import AbstractUser
from django.db import models
from django.contrib.auth import get_user_model
from sklearn.metrics.pairwise import cosine_similarity
from sklearn.feature_extraction.text import TfidfVectorizer
import numpy as np

class User(AbstractUser):
    ROLE_CHOICES = (
        ('vendor', 'Vendor'),
        ('company', 'Company'),
    )
    role = models.CharField(max_length=10, choices=ROLE_CHOICES)

    def __str__(self):
        return self.username

User = get_user_model()

class VendorProfile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, related_name="vendor_profile")
    company_name = models.CharField(max_length=255, blank=True, null=True)
    description = models.TextField(blank=True, null=True)
    services_offered = models.JSONField(default=list)  # List of services
    location = models.CharField(max_length=255, blank=True, null=True)
    rating = models.FloatField(default=0.0)
    recommendations = models.JSONField(default=list, blank=True, null=True)
    onboarding_step = models.IntegerField(default=0)
    onboarding_complete = models.BooleanField(default=False)

    def __str__(self):
        return self.company_name or self.user.username
    
    def save(self, *args, **kwargs):
        # Automatically create a VendorScore when the VendorProfile is saved
        if not self.pk:  # This check ensures the VendorScore is created only when VendorProfile is first created
            super().save(*args, **kwargs)  # Save VendorProfile first to generate the pk
            VendorScore.objects.create(vendor=self)  # Create VendorScore associated with the VendorProfile
        else:
            super().save(*args, **kwargs)
    
    def update_rating(self):
        """Update vendor rating based on reviews"""
        reviews = self.reviews.all()
        if reviews.exists():
            self.rating = sum(r.rating for r in reviews) / reviews.count()
        else:
            self.rating = 0.0
        self.save()
        
    def update_recommendations(self):
        """Compute AI-based vendor recommendations based on service similarity"""
        vendors = list(VendorProfile.objects.exclude(id=self.id))  # Convert queryset to list
        if not vendors:
            self.recommendations = []
            self.save()
            return

        # Ensure services_offered is converted to a meaningful string
        def clean_services(services):
            return ' '.join(services) if services else "General Services"

        service_texts = [clean_services(self.services_offered)] + [clean_services(v.services_offered) for v in vendors]


        # Convert text into numerical vectors using TF-IDF
        vectorizer = TfidfVectorizer(stop_words='english', min_df=1, max_features=5000, ngram_range=(1, 2))
        service_vectors = vectorizer.fit_transform(service_texts)

        # Compute cosine similarity
        similarity_matrix = cosine_similarity(service_vectors)

        # Get sorted indices (excluding self)
        sorted_indices = similarity_matrix[0][1:].argsort()[::-1]  # Exclude self

        # ✅ Set a **lower** similarity threshold for recommendations
        threshold = 0.2  

        recommended_vendors = []
        for idx in sorted_indices:
            if 0 <= idx < len(vendors):  # Ensure index is within bounds
                sim_score = similarity_matrix[0][idx + 1]  # Shift index by +1
                if sim_score >= threshold:
                    recommended_vendors.append(vendors[idx].id)

        self.recommendations = recommended_vendors
        self.save()

class Review(models.Model):
    vendor = models.ForeignKey('VendorProfile', related_name='reviews', on_delete=models.CASCADE)
    company = models.ForeignKey(User, related_name='given_reviews', on_delete=models.CASCADE)
    rating = models.PositiveIntegerField(choices=[(1, '1'), (2, '2'), (3, '3'), (4, '4'), (5, '5')])
    comment = models.TextField(blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Review by {self.company.username} for {self.vendor.company_name}"

class VendorScore(models.Model):
    vendor = models.OneToOneField(VendorProfile, on_delete=models.CASCADE, related_name='score')
    average_rating = models.FloatField(default=0.0)
    total_reviews = models.PositiveIntegerField(default=0)
    score = models.FloatField(default=0.0)

    def update_score(self):
        reviews = self.vendor.reviews.all()
        total_reviews = len(reviews)
        if total_reviews > 0:
            average_rating = sum([review.rating for review in reviews]) / total_reviews
            self.average_rating = average_rating
            self.score = (average_rating * 10) + (total_reviews * 2)  # Example scoring formula
        else:
            self.average_rating = 0.0
            self.score = 0.0
        self.total_reviews = total_reviews
        self.save()

    def __str__(self):
        return f"Score for {self.vendor.company_name}"
    
class Job(models.Model):
    vendor = models.ForeignKey(VendorProfile, related_name='jobs', on_delete=models.CASCADE)
    company = models.ForeignKey(User, related_name='hired_jobs', on_delete=models.CASCADE)
    title = models.CharField(max_length=255, default="Untitled Job")
    job_description = models.TextField()
    status = models.CharField(choices=[('pending', 'Pending'), ('completed', 'Completed')], max_length=10)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Job for {self.vendor.company_name} by {self.company.username}"

class Review(models.Model):
    vendor = models.ForeignKey(VendorProfile, related_name='reviews', on_delete=models.CASCADE)
    company = models.ForeignKey(User, related_name='given_reviews', on_delete=models.CASCADE)
    rating = models.PositiveIntegerField(choices=[(1, '1'), (2, '2'), (3, '3'), (4, '4'), (5, '5')])
    comment = models.TextField(blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Review by {self.company.username} for {self.vendor.company_name}"

class Notification(models.Model):
    user = models.ForeignKey(User, related_name='notifications', on_delete=models.CASCADE)
    message = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    is_read = models.BooleanField(default=False)

    def __str__(self):
        return f"Notification for {self.user.username} - {self.message[:30]}"
