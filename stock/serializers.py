from rest_framework import serializers
from .models import *




class StockSerializer(serializers.ModelSerializer):
    class Meta:
        model = List
        fields = ('stockId', 'stockName')