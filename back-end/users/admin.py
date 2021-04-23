from django.contrib import admin
from django.contrib.auth import get_user_model


from .models import  Link, Project, Screenshot
admin.site.register(get_user_model())
admin.site.register(Link)
admin.site.register(Project)
admin.site.register(Screenshot)

