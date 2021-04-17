from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView
from .serializers import UserSerializer, LinkSerializer, ProjectSerializer, ScreenshotSerializer
from .models import User, Link, Project, Screenshot

# Users
class UserList(ListCreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer

class UserDetail(RetrieveUpdateDestroyAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer

# Projects
class ProjectList(ListCreateAPIView):
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer

class ProjectDetail(RetrieveUpdateDestroyAPIView):
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer

# Screenshots
class ScreenshotList(ListCreateAPIView):
    queryset = Screenshot.objects.all()
    serializer_class = ScreenshotSerializer

class ScreenshotDetail(RetrieveUpdateDestroyAPIView):
    queryset = Screenshot.objects.all()
    serializer_class = ScreenshotSerializer

# Links
class LinkList(ListCreateAPIView):
    queryset = Link.objects.all()
    serializer_class = LinkSerializer

class LinkDetail(RetrieveUpdateDestroyAPIView):
    queryset = Link.objects.all()
    serializer_class = LinkSerializer