from django.db import models

#Genera un código de trámite


class Tramite(models.Model):
    name        = models.CharField(max_length=30, null=False)    
    description = models.CharField(max_length=200, null=False)
    price       = models.CharField(max_length=30, null=False)
    time_limit  = models.IntegerField(null=False) # in days
