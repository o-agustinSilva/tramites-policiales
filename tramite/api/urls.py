from django.urls import path
from .views import TramiteView 

urlpatterns = [
    path('home', TramiteView.as_view()),
]
