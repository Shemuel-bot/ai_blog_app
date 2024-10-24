from django.shortcuts import render, redirect
from django.http import JsonResponse
from django.contrib.auth.models import User
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.decorators import login_required

# Create your views here.
@login_required
def index(request):
    return JsonResponse({'message':'success'})

def user_login(request):
    if request.method == 'POST':
        username = request.POST['username']
        password = request.POST['password']

        user = authenticate(request, username=username)
        if user is not None:
            login(request, user)
            return JsonResponse({'message':'Login successful'})
        else:
            return JsonResponse({'message':'Login failed'})

def user_signup(request):
    if request.method == 'POST':
        username = request.POST['username']
        email = request.POST['email']
        password = request.POST['password']
        repeatPassword = request.POST['repeatPassword']

        if password == repeatPassword:
            try:
                user = User.objects.create_user(username, email, password)
                user.save()
                return JsonResponse({'message':'Sign up successful'})
            except:
                return JsonResponse({'message':'Error creating the account'})
        else:
            return JsonResponse({'message': 'Password does not match'})

def user_logout(request):
    logout(request)