from django.db import models

# Create your models here.
class List(models.Model):
    stockId = models.CharField(max_length=100,null=False,primary_key=True)
    stockName = models.CharField(max_length=100)
