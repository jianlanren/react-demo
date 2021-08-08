from .models import Info
from .serializers import UserInfoSerializer
from rest_framework import generics


class UserInfoCreate(generics.ListCreateAPIView):
    queryset = Info.objects.all()
    serializer_class = UserInfoSerializer

    def get_queryset(self):
        user_id = self.request.query_params.get('user_id')
        user_pwd = self.request.query_params.get('user_pwd')
        if user_id is not None and user_pwd is not None:
            self.serializer_class = UserInfoSerializer
            queryset = Info.objects.raw("""
            select name, email, password from user_info where email=
            """ + "'" + user_id + "'" + "and password=" + "'" + user_pwd + "'"
            )
            return queryset
        else:
            queryset = Info.objects.all()
            return queryset

