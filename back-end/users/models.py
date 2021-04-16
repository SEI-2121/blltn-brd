from django.db import models

# Create your models here.
class User(models.Model):
  username = models.CharField(max_length=120)
  bio = models.CharField(max_length=255, null=True)
  profile_pic = models.URLField(null=True)
  location = models.CharField(max_length=120, null=True)

  def __str__(self):
    return self.username


class Link(models.Model):
  user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='user_link')
  link_name = models.CharField(max_length=120)
  link_url = models.URLField()

  def __str__(self):
    return self.link_name

class Project(models.Model):
  project_name = models.CharField(max_length=120)
  user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='user_project')
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
