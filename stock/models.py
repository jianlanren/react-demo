from django.db import models


# Create your models here.
class List(models.Model):
    stockId = models.CharField(max_length=100,null=False,primary_key=True)
    stockName = models.CharField(max_length=100)


class Record(models.Model):
    date = models.DateTimeField(db_column='date',null=False,primary_key=True)
    price = models.CharField(max_length=100)