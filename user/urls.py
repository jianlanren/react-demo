from django.urls import path
from . import views


urlpatterns = [
    path('api/user/', views.UserInfoCreate.as_view() ),
]