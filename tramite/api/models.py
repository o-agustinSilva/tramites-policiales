from django.db import models

#Genera un código de trámite
class User(models.Model):
    ROLES = (
        ('citizen', 'Ciudadano'),
        ('police', 'Policia'),
        ('administrator', 'Administrador')
    )

    dni     = models.IntegerField()
    name    = models.CharField(max_length=50, null=False)
    surname = models.CharField(max_length=50, null=False)
    email   = models.EmailField(max_length=55, null=False)
    role    = models.CharField(max_length=13, choices=ROLES)

class Citizen(User):
    adress  = models.CharField(max_length=60, null=False) 
    phone   = models.CharField(max_length=16, null=False)

class Police_personnel(User):
    hierarchy = models.CharField(max_length=30, null=False)

class Tramite(models.Model):
    name        = models.CharField(max_length=30, null=False)    
    description = models.CharField(max_length=200, null=False)
    price       = models.CharField(max_length=30, null=False)
    time_limit  = models.IntegerField(null=False) # in days
    status      = models.ForeignKey("Status", on_delete = models.CASCADE) 
    user        = models.ForeignKey("User" , on_delete = models.CASCADE)

class Status(models.Model):
    Nombre = models.CharField(max_length=30)
