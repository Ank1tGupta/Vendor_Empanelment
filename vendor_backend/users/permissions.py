from rest_framework.permissions import BasePermission

class IsVendor(BasePermission):
    """Allows access only to vendor users."""
    def has_permission(self, request, view):
        return request.user.is_authenticated and request.user.role == 'vendor'

class IsCompany(BasePermission):
    """Allows access only to company users."""
    def has_permission(self, request, view):
        return request.user.is_authenticated and request.user.role == 'company'
