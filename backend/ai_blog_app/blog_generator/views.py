from django.shortcuts import render, redirect
from django.http import JsonResponse
from django.contrib.auth.models import User
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.decorators import login_required
from django.views.decorators.csrf import csrf_exempt
import json
from pytubefix import YouTube
from django.conf import settings
import os
import assemblyai as ai
import openai
from dotenv import load_dotenv
from .models import BlogPost

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

        transcription = get_transcription(yt_link)
        if not transcription:
            return JsonResponse({'message':'Failed to get transcript'}, status=500)
   
        blog_content = generate_blog_from_transcription(transcription)
        if not blog_content:
            return JsonResponse({'message':'Failed to generate blog article'}, status=500)

        new_blog_article = BlogPost.objects.create(
            user=request.user,
            youtube_title=title,
            youtube_link=yt_link,
            generated_content=blog_content
        )

        new_blog_article.save()
   
        return JsonResponse({'message': blog_content})
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
    audio_file = download_audio(link)
    ai.settings.api_key = "360bea71c5f74eba93ce966096c510e6"

    transcriber = ai.Transcriber()
    transcript = transcriber.transcribe(audio_file)

    return transcript.text

def generate_blog_from_transcription(transcription):
    load_dotenv()
    openai.api_key = os.getenv("API_KEY")

    prompt = f'Based on the following transcript from a YouTube video, write a comprehensive blog article, write it based on the transcript, but dont make it look  like a youtube video, make it look like a proper blog article:\n\n{transcription}\n\nArticle:'

    response = openai.completions.create(
        model="gpt-3.5-turbo-instruct",
        prompt=prompt,
        max_tokens=1000,
    )

    generated_content = response.choices[0].text.strip()

    return generated_content

def blog_list(request):
    blog_articles = BlogPost.objects.filter(user=request.user)
    return JsonResponse({'message': blog_articles})

def blog_details(request, pk):
    blog_article_details = BlogPost.objects.get(id=pk)
    if request.user == blog_article_details.user:
        return JsonResponse({'message' : blog_article_details})
    else:
        return JsonResponse({'message' : 'Failed to fetch data'})


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
                return JsonResponse({'message':'successful'})
            except:
                return JsonResponse({'message':'Error creating the account'})
        else:
            return JsonResponse({'message': 'Password does not match'})
    elif request.method == 'OPTIONS':
        print('text')

def user_logout(request):
    logout(request)