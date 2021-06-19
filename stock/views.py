from django.shortcuts import render

# Create your views here.
from rest_framework import generics
from stock.models import List
from stock.serializers import StockSerializer


class StockListCreate(generics.ListCreateAPIView):
    queryset = List.objects.raw("""
    select stockId, stockName from stockDb.stock_list
    """)
    serializer_class = StockSerializer
