from django.shortcuts import render, redirect
from django.http import JsonResponse
from django.contrib.auth.models import User
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.decorators import login_required
from django.views.decorators.csrf import csrf_exempt
import json
from pytube import YouTube
from django.conf import settings
import os

# Create your views here.
@login_required
def index(request):
    return JsonResponse({'message':'success'})

@csrf_exempt
def generate_blog(request):
    if request.method == 'POST':
        try:
            data = json.loads(request.body)
            yt_link = data['link']
        
        except (KeyError, json.JSONDecodeError):
            return JsonResponse({'message':'Invalid data sent'}, status=400)
        
        title = yt_title(yt_link)
    else:
        return JsonResponse({'message': 'Invalid request method'}, status=405)


def yt_title(link):
    yt = YouTube(link)
    title = yt.title
    return title

def download_audio(link):
    yt = YouTube(link)
    video = yt.streams.filter(only_audio=True).first()
    out_file = video.download(output_path=settings.MEDIA_ROOT)
    base, ext = os.path.splitext(out_file)
    new_file = base + '.mp3'
    os.rename(out_file, new_file)
    return new_file

def get_transcription(link):
    pass

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