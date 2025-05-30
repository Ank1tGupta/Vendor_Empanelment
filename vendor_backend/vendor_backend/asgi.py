import os
from django.core.asgi import get_asgi_application
from channels.routing import ProtocolTypeRouter, URLRouter
from channels.auth import AuthMiddlewareStack
import users.routing  # Import from `users.routing`

os.environ.setdefault("DJANGO_SETTINGS_MODULE", "vendor_backend.settings")

application = ProtocolTypeRouter({
    "http": get_asgi_application(),
    "websocket": AuthMiddlewareStack(
        URLRouter(users.routing.websocket_urlpatterns)  # Use `users.routing`
    ),
})
