# Movie App - T-Series  

## Introduction

Welcome to my Movie App project! This is a simple web application that displays movies and their details. You can browse through different movie categories, view details about individual movies, and even upload images. This app was built using React and uses The Movie Database (TMDb) API to fetch movie data.

---

## Features

- Browse movies by categories like Action, Comedy, Drama, etc.
- View details of each movie, including its title, genres, release date, and more.
- Upload images to the app using a simple file upload system.
- Responsive layout that works well on both desktop and mobile devices.

---

## Technologies Used

- React.
- Tailwind.
- TMDb API.
- Formidable: A Node.js package for handling file uploads.
- Node.js: Server-side JavaScript runtime for handling API requests.

---

## Getting Started

To run this project locally on your computer, follow these steps:

### 1. Clone the Repository

Start by cloning the repository to your local machine. Open your terminal and run:

## Getting Started

```
git clone https://github.com/tali-creator/T-Series.git
cd movie-app

 ## 2. Install Dependencies
Once you have the project, you need to install the necessary packages. Run the following command to install everything:


npm install
This will install all the required dependencies for both the front-end and back-end.


## 3. Set Up the TMDb API Key
In order to fetch movie data, you need an API Key from The Movie Database (TMDb). Here's how to get it:

Go to TMDb's website.
Sign up or log in.
Visit your account settings and find your API key.
Create a .env file in the root of your project (next to package.json) and add your key like this:
env

VITE_TMDB_API_KEY=your_tmdb_api_key_here

to make things 


### 4. Run the Development Server
After you've installed the dependencies and set up the API key, you can start the development server by running:



npm run dev
This will start the app and you should see it running at http://localhost:3000 in your browser!

How the App Works
Home Page:

You’ll see a list of categories (e.g., Action, Drama, Comedy).
Click on a category to see movies from that genre.
Movie Details:

Click on any movie poster to see detailed information about that movie, including:
Genres
Release Date
Popularity
Languages
Overview
You can navigate between different images of the movie by clicking the left or right arrows.
File Upload:

There is an image upload feature where you can upload an image, which will be saved to the server.currently this function doesn't work quite well as expected , i am still having issues on how to host the image succefully
i have tried several hosting platform (e.g IMGUR, CLOUDINARY, FIREBASE) but still facing challanges

i hope to be able to integrate that in the nearest future

How to Use the App
Navigate through categories:
Click on the categories (like Action, Comedy) to see the movies.
View movie details:
Click on a movie's poster to view its details, including genres, release date, and more.
Upload an image:
Use the file upload feature to upload images to the server.
```
