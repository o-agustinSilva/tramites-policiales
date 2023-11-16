from django.urls import path
from .views import index

urlpatterns = [
    path('', index),
    path('login', index),
    path('tramite', index),
    path('solicitarTramite', index),
    path('registrarse', index)
]
