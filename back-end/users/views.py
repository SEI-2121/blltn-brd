from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView, ListAPIView, RetrieveAPIView
from .serializers import LinkSerializer, ProjectSerializer, ScreenshotSerializer, UserSerializer
from .models import Link, Project, Screenshot, User
from rest_framework import permissions


class UserList(ListAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer

class UserDetail(RetrieveAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer

class ProjectList(ListCreateAPIView):
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)

class ProjectDetail(RetrieveUpdateDestroyAPIView):
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer

class ScreenshotList(ListCreateAPIView):
    queryset = Screenshot.objects.all()
    serializer_class = ScreenshotSerializer

class ScreenshotDetail(RetrieveUpdateDestroyAPIView):
    queryset = Screenshot.objects.all()
    serializer_class = ScreenshotSerializer

class LinkList(ListCreateAPIView):
    queryset = Link.objects.all()
    serializer_class = LinkSerializer

class LinkDetail(RetrieveUpdateDestroyAPIView):
    queryset = Link.objects.all()
    serializer_class = LinkSerializer
