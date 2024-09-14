# TweetHub Backend

TweetHub is a Twitter clone built with Node.js, Sequelize, and MySQL. This repository contains the backend code for the application, providing APIs for user authentication, tweet creation, notifications, and more.

## Table of Contents

- [Features](#features)
- [Technologies](#technologies)
- [Installation](#installation)
- [Configuration](#configuration)
- [Running the App](#running-the-app)
- [API Endpoints](#api-endpoints)
- [Contributing](#contributing)
- [License](#license)

## Features

- User Authentication (Signup/Login)
- JWT-based authorization
- Create, edit, and delete tweets
- Follow/unfollow users
- Like and retweet functionality
- Notifications for mentions, follows, and likes
- Profile customization
- Real-time updates with WebSockets (Optional)

## Technologies

- **Node.js**: Backend runtime environment
- **Express**: Web framework for Node.js
- **Sequelize**: ORM for MySQL
- **MySQL**: Relational database
- **JWT (JSON Web Tokens)**: For secure authentication
- **bcrypt**: Password hashing
- **dotenv**: Environment variables management
- **cookie-parser**: Cookie management
- **Nodemon** (Development): Auto-restart during development

## Endpoints

# Auth

- **POST /auth/signup**: Register a new user.
- **POST /auth/login**: Log in with existing credentials.

# Tweets

- **GET /tweets**: Get all tweets (supports pagination).
- **POST /tweets**: Create a new tweet (requires authentication).
- **PUT /tweets/:id**: Edit a tweet (requires authentication).
- **DELETE /tweets/:id**: Delete a tweet (requires authentication)

# User

- **GET /users/:id**: Get user profile by ID.
- **POST /users/:id/follow**: Follow a user (requires authentication).
- **POST /users/:id/unfollow**: Unfollow a user (requires authentication).

# Notifications

- **GET /notifications**: Get all notifications for the logged-in user.

# Likes

- **POST /tweets/:id/like**: Like a tweet (requires authentication).
- **DELETE /tweets/:id/unlike**: Unlike a tweet (requires authentication).

# Retweets

- **POST /tweets/:id/retweet**: Retweet a tweet (requires authentication).
- **DELETE /tweets/:id/unretweet**: Remove a retweet (requires authentication).
