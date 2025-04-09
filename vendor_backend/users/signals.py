
from django.db.models.signals import post_save
from django.dispatch import receiver
from django.contrib.auth import get_user_model
from .models import VendorProfile, Review, VendorScore

User = get_user_model()

@receiver(post_save, sender=User)
def create_vendor_profile(sender, instance, created, **kwargs):
    if created:
        # Create a VendorProfile for each new user if they are a vendor
        if instance.role == 'vendor':  # Assuming 'role' field defines the user's role
            VendorProfile.objects.create(user=instance)

@receiver(post_save, sender=Review)
def update_vendor_score(sender, instance, created, **kwargs):
    if created:  # Only update when a new review is added
        vendor_profile = instance.vendor
        vendor_score = vendor_profile.score  # This should already exist due to the save method on VendorProfile
        vendor_score.update_score()