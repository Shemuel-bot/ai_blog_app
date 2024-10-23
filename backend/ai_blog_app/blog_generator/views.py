from django.shortcuts import render

# Create your views here.
def index(request):
    return render(request, 'index.html')

def login(request):
    pass

def signup(request):
    pass

def logout(request):
    pass