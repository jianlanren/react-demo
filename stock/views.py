from django.shortcuts import render

# Create your views here.
from rest_framework import generics
from stock.models import List, Record
from stock.serializers import StockSerializer, RecordSerializer
from django.db import connection


class StockListCreate(generics.ListCreateAPIView):

    def get_queryset(self):
        stock_id = self.request.query_params.get('stock_id')
        if stock_id is not None:
            self.serializer_class = RecordSerializer
            queryset = Record.objects.raw("""
            select date, close as price From stockDb.
            """ + stock_id + "_day limit 500"
            )[::10]
            #with connection.cursor() as cursor:
            #    cursor.execute("select date, close as price From stockDb." + stock_id + "_day")
            #    row = cursor.fetchall()
            #    for d in row:
            #        print(row)
            #return row
            return queryset
        else:
            self.serializer_class = StockSerializer
            queryset = List.objects.raw("""
            select stockId, stockName from stockDb.stock_list
            """)
            return queryset
