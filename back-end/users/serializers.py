from rest_framework.serializers import HyperlinkedModelSerializer
from rest_framework import serializers
from .models import Link, Project, Screenshot, User


class UserSerializer(serializers.HyperlinkedModelSerializer):
    projects = serializers.HyperlinkedRelatedField(view_name='project-detail',
        many=True, queryset=Project.objects.all())

    class Meta:
        model = User
        fields = ['id', 'username', 'projects']


class LinkSerializer(HyperlinkedModelSerializer):

    class Meta:
        model = Link
        fields = ('link_name', 'link_url')


class ProjectSerializer(HyperlinkedModelSerializer):
    project_screenshot = serializers.HyperlinkedRelatedField(
        view_name='project-screenshot', many=True, read_only=True)
    user = serializers.HyperlinkedRelatedField(
        view_name='user-detail', read_only=True)

    class Meta:
        model = Project
        fields = ('user', 'project_name', 'description', 'projects_website',
                  'source_code', 'technologies_used', 'project_screenshot')

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)



class ScreenshotSerializer(HyperlinkedModelSerializer):

    class Meta:
        model = Screenshot
        fields = ('project', 'screenshot_name', 'screenshot')
