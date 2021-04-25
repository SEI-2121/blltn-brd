from django.db import models
from django.contrib.auth.models import AbstractUser, BaseUserManager
from django.contrib.auth import get_user_model


class User(AbstractUser):
    bio = models.CharField(max_length=255, null=True)
    profile_pic = models.URLField(null=True)
    location = models.CharField(max_length=120, null=True)


class CustomUserManager(BaseUserManager):
    def create_user(self, username, email, password, **extra_fields):
        user = self.model(username= username, email=email, **extra_fields)
        user.set_password(password)
        user.save()
        return user

    def create_superuser(self, username, email, password, **extra_fields):
        user = self.create_user(username= username, email=email, **extra_fields)
        user.set_password(password)
        user.is_admin = True
        user.save()
        return user


class Link(models.Model):
    link_name = models.CharField(max_length=120)
    link_url = models.URLField()

    def __str__(self):
        return self.link_name


class Project(models.Model):
    user = models.ForeignKey(
        get_user_model(), related_name='projects', on_delete=models.CASCADE)
    project_name = models.CharField(max_length=120)
    description = models.CharField(max_length=255, null=True)
    projects_website = models.URLField(null=True)
    source_code = models.URLField(null=True)
    technologies_used = models.CharField(max_length=120, null=True)

    def __str__(self):
        return self.project_name


class Screenshot(models.Model):
    project = models.ForeignKey(
        Project, on_delete=models.CASCADE, related_name='project_screenshot')
    screenshot_name = models.CharField(max_length=120)
    screenshot = models.URLField()

    def __str__(self):
        return self.screenshot_name
