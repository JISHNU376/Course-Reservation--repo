# Course Reservation System
[![Node.js](https://img.shields.io/badge/Node.js-18.x-green)](https://nodejs.org)
[![Express](https://img.shields.io/badge/Express.js-4.x-black)](https://expressjs.com)
[![MongoDB](https://img.shields.io/badge/MongoDB-6.x-brightgreen)](https://www.mongodb.com)
[![License](https://img.shields.io/badge/License-MIT-blue)](LICENSE)

A web-based application designed to facilitate course reservations for students and administrators.

## 📌 Features

- User Authentication (Login/Signup)
- Course Listing and Viewing
- Course Reservation and Cancellation
- Admin Panel to manage courses and users

## 🛠️ Technologies Used

- **Frontend**: HTML, CSS, JavaScript
- **Backend**: Node.js, Express.js
- **Database**: MongoDB (with Mongoose)
- **Other Tools**: dotenv for environment variables, Express Router

## 📁 Project Structure

```
├── .vscode/ # VS Code configurations
├── Html/ # HTML UI files
├── models/ # Mongoose models (schemas)
├── node_modules/ # Installed npm packages
├── routes/ # Express route handlers
├── .env # Environment variables
├── .hintrc # Linting configuration
├── package.json # Project metadata
├── package-lock.json # Dependency lock file
└── server.js # Main server file
```


## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/)

# 🏗 Technical Architecture

The Course Reservation System is designed using a **Model-View-Controller (MVC)** architecture to separate concerns, improve maintainability, and scale efficiently.

 ```mermaid 
 graph LR
  A[(User Browser)] --> B[Frontend]
    B --> C[HTML/CSS/JavaScript]
    B --> D[Backend]
    D --> E[Node.js + Express]
    D --> F[Routing & Controllers]
    F --> G[(MongoDB Database)]

``` 
---

## 🧩 Components Overview

### 1. **Frontend (View)**
- **Tech Stack**: HTML, CSS, JavaScript
- **Location**: `/Html/`
- **Responsibilities**:
  - Present user interfaces for login, signup, course browsing, and admin actions
  - Send user actions (form submissions, button clicks) to backend via HTTP requests

---

### 2. **Backend (Controller + Business Logic)**
- **Tech Stack**: Node.js, Express.js
- **Location**: `/routes/`, `server.js`
- **Responsibilities**:
  - Handle HTTP requests and responses
  - Route user interactions to appropriate services
  - Perform authentication and validation
  - Control logic for course reservation, user session, etc.

---

### 3. **Database Layer (Model)**
- **Tech Stack**: MongoDB + Mongoose ODM
- **Location**: `/models/`
- **Responsibilities**:
  - Define schemas for users, courses, and reservations
  - Interact with MongoDB to store and retrieve application data

---

## 🔁 Data Flow

1. **User interacts with frontend** (e.g., selects a course to reserve).
2. **Frontend sends request** (e.g., POST /reserve-course) to the backend.
3. **Express route handler processes the request**, performs logic, and interacts with the database.
4. **Database returns response** (e.g., reservation success/failure).
5. **Backend sends response** to frontend for rendering.

---

## ⚙️ System Dependencies

- **Node.js**: JavaScript runtime for the backend server
- **Express.js**: Web framework for routing and middleware
- **MongoDB**: NoSQL database for storing users, courses, and reservations
- **dotenv**: Manages environment variables
- **Mongoose**: MongoDB object modeling for Node.js

---

## 🛡 Security Considerations

- Password hashing with bcrypt or similar (if implemented)
- Use of environment variables to store sensitive configs
- Input validation and sanitization to prevent injection attacks
- Authentication middleware to protect admin routes

---

## 🔧 Future Enhancements (Suggested)

- Use a frontend framework (e.g., React) for better UI control
- Add JWT-based authentication for stateless login
- Implement role-based access control (admin vs. user)
- Add unit and integration tests



### Installation

1. Clone the repository

```bash
git clone https://github.com/JISHNU376/Course-Reservation--repo.git
cd Course-Reservation--repo
```

### Install dependencies:
```
npm install
```
### Set up environment variables:
Create a .env file in the root directory and add necessary configurations:
```
PORT=3000
MONGODB_URI=your_mongodb_connection_string
```

### Run the application:

```
npm start
```
### Access the application:
Open your browser and navigate to 
```
http://localhost:3000
```
