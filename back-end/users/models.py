from django.db import models
from django.contrib.auth.models import AbstractUser

# Create your models here.

class User(AbstractUser):
  pass

class Link(models.Model):
  link_name = models.CharField(max_length=120)
  link_url = models.URLField()

  def __str__(self):
    return self.link_name

class Project(models.Model):
  user = models.ForeignKey(User, related_name='projects', on_delete=models.CASCADE)
  project_name = models.CharField(max_length=120)
  description = models.CharField(max_length=255, null=True)
  projects_website = models.URLField(null=True)
  source_code = models.URLField(null=True)
  technologies_used = models.CharField(max_length=120, null=True)

  def __str__(self):
    return self.project_name

class Screenshot(models.Model):
  project = models.ForeignKey(Project, on_delete=models.CASCADE, related_name='project_screenshot')
  screenshot_name = models.CharField(max_length=120)
  screenshot = models.URLField()

  def __str__(self):
    return self.screenshot_name
