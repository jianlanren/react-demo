from rest_framework import serializers
from .models import *


class StockSerializer(serializers.ModelSerializer):
    class Meta:
        model = List
        fields = ('stockId', 'stockName')


class RecordSerializer(serializers.ModelSerializer):
    class Meta:
        model = Record
        fields = ('date', 'price')