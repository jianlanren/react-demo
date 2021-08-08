from django.db import models


# Create your models here.
class Info(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField(null=False,primary_key=True)
    password = models.CharField(max_length=300)