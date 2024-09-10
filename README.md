# Court Booking System

## Overview

This **Court Booking System** is a web application that allows users to book sports courts such as badminton, tennis, and futsal. The system supports different user roles, including **Super Admin**, **Admin**, and **Regular Users**, each with specific permissions to manage and access various features of the application.

## Features

- **User Role Management**: Different roles with specific permissions:
  - **Super Admin**: Register and manage courts, block/unblock courts, and manage user roles.
  - **Admin**: Manage court bookings and view booking details.
  - **User**: Sign up, log in, book courts, and request new courts.

- **Court Management**: Add, block, and unblock courts.

- **Booking System**: Users can book courts for one-hour slots.

- **Request System**: Users can request new courts to be registered.

## Technology Stack

- **Backend**: Node.js with Express
- **Database**: MongoDB
- **Authentication**: JSON Web Tokens (JWT)
- **Password Encryption**: bcryptjs

## ERD Diagram

![Main](https://github.com/user-attachments/assets/676fd2d0-a3b5-4b62-897d-df7d765d395c)


## API Endpoints

### User Endpoints

- **POST /api/auth/signup**: Register a new user.
  - **Request body**: `{ name, email, password, role }`
  - **Response**: `{ message, userId,name,role,createdAt,token }`

- **POST /api/auth/login**: Log in a user and receive a JWT.
  - **Request body**: `{ email, password }`
  - **Response**: `{ token, userId, name,role,createdAt }`

- **GET /api/auth/users/:userId**: Get user profile information.
  - **Response**: `{ user }`


### Court Endpoints

- **POST /api/courts**: Register a new court.
  - **Request body**: `{ name, sportType, location }`
  - **Response**: `{ court }`

- **GET /api/courts**: Retrieve all courts.
  - **Response**: `{ courts }`

- **PATCH /api/courts/:id/block**: Block a court (Super Admin only).
  - **Response**: `{ court }`

- **PATCH /api/courts/:id/unblock**: Unblock a court (Super Admin only).
  - **Response**: `{ court }`

### Booking Endpoints

- **POST /api/bookings**: Create a new booking.
  - **Request body**: `{ courtId, date, timeSlot }`
  - **Response**: `{ booking }`

- **GET /api/bookings**: Retrieve all bookings.
  - **Response**: `{ bookings }`

### Request Endpoints

- **POST /api/requests**: Request a new court.
  - **Request body**: `{ sportType, courtName, location }`
  - **Response**: `{ request }`

- **GET /api/requests**: Retrieve all requests.
  - **Response**: `{ requests }`

## Testing with Postman
You can access the Postman documentation via the following link:https://documenter.getpostman.com/view/29077435/2sAXjT1pSL












