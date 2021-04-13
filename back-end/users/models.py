from django.db import models

# Create your models here.
class User(models.Model):
  username = models.CharField(max_length=120)
  projects = None # I think is is null until we have the applicable foreign model
  bio = CharField(max_length=255, null=True)
  profile_pic = models.URLField(null=True)
  links = None # I think is is null until we have the applicable foreign model
  location = models.CharField(max_length=120, null=True)

  def __str__(self):
    return self.username