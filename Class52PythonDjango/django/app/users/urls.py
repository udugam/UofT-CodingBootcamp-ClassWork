from django.conf.urls import url
from . import views

urlPatterns = [
    url(r'^home', views.home, name='home')
]