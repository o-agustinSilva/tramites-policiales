from rest_framework import serializers
from .models import *

class TramiteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tramite
        fields = ('id', 'name', 'description', 'price', 'time_limit')

class CitizenSerializer(serializers.ModelSerializer):
    class Meta:
        model = Citizen
        fields = ('id', 'dni', 'name', 'surname', 'email', 'adress', 'phone', 'role')