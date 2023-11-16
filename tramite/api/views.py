from rest_framework import generics
from .serializers import *
from .models import *
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.viewsets import GenericViewSet
from rest_framework.mixins import (
    CreateModelMixin, ListModelMixin, RetrieveModelMixin, UpdateModelMixin
)

# Create your views here.
class TramiteView(generics.ListAPIView): 
    queryset         = Tramite.objects.all()
    serializer_class = TramiteSerializer
    
class CitizenViewSet(GenericViewSet,  # generic view functionality
                    CreateModelMixin,  # handles POSTs
                    RetrieveModelMixin,  # handles GETs for 1 Company
                    UpdateModelMixin,  # handles PUTs and PATCHes
                    ListModelMixin):  # handles GETs for many Companies

    def get_queryset(self):
        getByDNI = self.request.query_params.get('dni')
        if getByDNI:
            return Citizen.objects.filter(dni=getByDNI)
        else:
            return Citizen.objects.all()
        
    serializer_class = CitizenSerializer
      