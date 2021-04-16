from django.contrib import admin

# Register your models here.
from .models import User, Link, Project, Screenshot

admin.site.register(User)
admin.site.register(Link)
admin.site.register(Project)
admin.site.register(Screenshot)

