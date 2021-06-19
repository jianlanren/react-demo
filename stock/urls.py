from django.urls import include, path
from . import views
from rest_framework import routers


urlpatterns = [
    path('api/stocks/', views.StockListCreate.as_view() ),
]