# AI Blog App

AI Blog App is a full-stack demo that converts YouTube videos into blog articles using AI-powered transcription and text generation.

The app uses a Django backend to handle authentication, media processing, and blog storage, and a React frontend built with Vite for user login, blog generation, and browsing saved articles.

## Features

- User signup and login with Django authentication
- Generate blog articles from YouTube video links
- Download video audio, transcribe with AssemblyAI, and create blog content via OpenAI
- Save generated blogs per user in a PostgreSQL-backed Django app
- View all saved blogs and blog details from the frontend

## Architecture

- `backend/ai_blog_app/`: Django project
- `backend/ai_blog_app/blog_generator/`: Django app with models, views, and API endpoints
- `frontend/`: Vite + React frontend
- `backend/ai_blog_app/requirements.txt`: Python dependencies
- `frontend/package.json`: frontend dependencies

## API Endpoints

- `POST /login` — login user
- `POST /signup` — create account
- `GET /logout` — logout user
- `POST /generate-blog` — generate a blog article from YouTube link
- `GET /blog-list/<user_id>/` — list blogs for a user
- `GET /blog-details/<blog_id>/` — fetch a single blog details

## Prerequisites

- Python 3.11+ (or compatible Python 3.x)
- PostgreSQL database
- Node.js 18+ and npm/yarn
- OpenAI API key

## Backend Setup

1. Open a terminal and go to the backend folder:
   ```bash
   cd backend/ai_blog_app
   ```
2. Create and activate a virtual environment:
   ```bash
   python -m venv .venv
   source .venv/bin/activate
   ```
3. Install Python dependencies:
   ```bash
   pip install -r requirements.txt
   ```
4. Configure database environment variables for PostgreSQL. Create a `.env` file in `backend/ai_blog_app` with:
   ```bash
   USER=<db_user>
   PASSWORD=<db_password>
   HOST=<db_host>
   PORT=<db_port>
   API_KEY=<your_openai_api_key>
   ```
5. Apply migrations:
   ```bash
   python manage.py migrate
   ```
6. Start the Django development server:
   ```bash
   python manage.py runserver
   ```

## Frontend Setup

1. Open a second terminal and go to the frontend folder:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the Vite development server:
   ```bash
   npm run dev
   ```
4. Open the app in your browser at `http://localhost:5173`

## Usage

1. Visit the frontend at `http://localhost:5173`
2. Sign up for a new account or log in
3. Enter a YouTube video link on the home page
4. Click **Generate** to create a blog article from the video transcript
5. View saved blogs via the **all-blogs** page

## Notes

- The backend currently uses PostgreSQL by default. Update `DATABASES` in `backend/ai_blog_app/ai_blog_app/settings.py` when needed.
- The app uses environment variables for the OpenAI API key. Keep this value private.
- CORS is enabled for `http://localhost:5173` in backend settings for local development.

## Optional

- Create an admin user:
  ```bash
  python manage.py createsuperuser
  ```
- Serve production-ready frontend assets by building the React app:
  ```bash
  npm run build
  ```

## License

This repository does not specify a license. Add one if you intend to share or publish the code.
