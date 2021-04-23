from django.urls import path
from . import views

urlpatterns = [
    path('users/', views.UserList.as_view(), name='user-list'),
    path('users/<int:pk>', views.UserDetail.as_view(), name='user-detail'),
    path('projects/', views.ProjectList.as_view(), name='project-list'),
    path('projects/<int:pk>', views.ProjectDetail.as_view(), name='project-detail'),
    path('projects/screenshots/', views.ScreenshotList.as_view(), name='screenshot-list'),
    path('projects/screenshots/<int:pk>', views.ScreenshotDetail.as_view(), name='screenshot-detail'),
]

