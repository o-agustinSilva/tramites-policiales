from django.urls import path, include
from .views import * 
from api import views
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register(r'ciudadanos', views.CitizenViewSet, basename='ciudadanos')

urlpatterns = [
    path('tramites', TramiteView.as_view()),
    path('', include(router.urls)),
]
