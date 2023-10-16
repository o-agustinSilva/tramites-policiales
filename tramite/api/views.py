from django.shortcuts import render
from rest_framework import generics 
from .serializers import TramiteSerializer
from .models import Tramite

# Create your views here.
class TramiteView(generics.ListAPIView): 
    queryset         = Tramite.objects.all()
    serializer_class = TramiteSerializer
    