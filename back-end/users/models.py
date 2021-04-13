from django.db import models

# Create your models here.
class User(models.Model):
  username = models.CharField(max_length=120)
  projects = models.ForeignKey(Project, related_name='users', null=True)
  bio = models.CharField(max_length=255, null=True)
  profile_pic = models.URLField(null=True)
  links = models.ForeignKey(Link, related_name='users', null=True)
  location = models.CharField(max_length=120, null=True)

  def __str__(self):
    return self.username


class Link(models.Model):
  username = models.ForeignKey(User, on_delete=models.CASCADE, related_name='users')
  url = models.URLField()

  def __str__(self):
    return self.username # is username the correct choice here?


class Project(models.Model):
  project_name = models.CharField(max_length=120)
  username = models.ForeignKey(User, on_delete=models.CASCADE, related_name='users')
  description = models.CharField(max_length=255, null=True)
  projects_website = models.URLField(null=True)
  screenshots = models.ForeignKey(Screenshot, related_name='users', null=True)
  source_code = models.URLField(null=True)
  technologies_used = models.CharField(max_length=120, null=True)

  def __str__(self):
    return self.username

class Screenshot(models.Model):
  project = models.ForeignKey(Project, on_delete=models.CASCADE, related_name='users')
  screenshot = models.URLField()

  def __str__(self):
    return self.project
