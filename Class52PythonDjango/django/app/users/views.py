from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.
def home(request):
    #do some work
    response = '<h1>Hello World</h1>'

    return HttpResponse(response)