from rest_framework.serializers import HyperlinkedModelSerializer
from rest_framework import serializers

from .models import User, Link, Project, Screenshot


class UserSerializer(HyperlinkedModelSerializer):
    user_project = serializers.HyperlinkedRelatedField(
        view_name='user-project', many=True, read_only=True)
    user_link = serializers.HyperlinkedRelatedField(
        view_name='user-link', many=True, read_only=True)

    class Meta:
        model = User
        fields = ('username', 'profile_pic', 'bio', 'location', 'user_links', 'user_projects')


class LinkSerializer(HyperlinkedModelSerializer):

    class Meta:
        model = Link
        fields = ('user', 'link_name', 'link_url')

class ProjectSerializer(HyperlinkedModelSerializer):
    project_screenshot = serializers.HyperlinkedRelatedField(
        view_name='project-screenshot', many=True, read_only=True)

    class Meta:
        model = Project
        fields = ('project_name', 'user', 'description', 'projects_website', 'source_code', 'technologies_used', 'project_screenshot')

class ScreenshotSerializer(HyperlinkedModelSerializer):

    class Meta:
        model = Screenshot
        fields = ('project', 'screenshot_name', 'screenshot')

