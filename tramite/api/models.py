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
    password = models.CharField(max_length=255, null=False, default='a')
    birthdate = models.DateField(auto_now=False, default="2000-06-10")
    
    
    def __str__(self):
        return self.name + ' ' + self.surname

class Citizen(User):
    adress  = models.CharField(max_length=60, null=False) 
    phone   = models.CharField(max_length=16, null=False) 

class Police_personnel(User):
    hierarchy   = models.CharField(max_length=30, null=False)
    dependence  = models.ForeignKey("Dependence", on_delete=models.CASCADE)

class Dependence(models.Model):
    name    = models.CharField(max_length=25, null=False)
    adress  = models.CharField(max_length=60, null=False)
    phone   = models.CharField(max_length=16, null=False) 
    tramite = models.ManyToManyField("Tramite", verbose_name="Lista de trámites")

    def __str__(self):
        return self.name

class Tramite(models.Model):
    name        = models.CharField(max_length=30, null=False)    
    description = models.CharField(max_length=200, null=False)
    price       = models.CharField(max_length=30, null=False)
    time_limit  = models.IntegerField(null=False) # in days
    requirement = models.ManyToManyField("Requirements", verbose_name="Lista de requerimientos")

    def __str__(self):
        return self.name

class Payment(models.Model):
    ESTADOS = (
        ('pending', 'Pendiente'),
        ('processed', 'Procesado'),
        ('rejected', 'Rechazado'),
        ('refunded', 'Reintegrado')
    )

    tramite = models.ForeignKey("Tramite", on_delete=models.CASCADE) 
    user    = models.ForeignKey("User", on_delete=models.CASCADE)
    
    operation_number    = models.CharField(max_length=15, null=False)
    amount              = models.DecimalField(max_digits=5, decimal_places=2)
    payment_date        = models.DateField(null=False)
    payment_status      = models.CharField(max_length=11, choices=ESTADOS)

    def __str__(self):
        return self.operation_number

class Requirements(models.Model): 
    name = models.CharField(max_length=30, null=False)

    def __str__(self):
        return self.name
