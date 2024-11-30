Authentication System with Node.js, Express, Passport.js, and MongoDB.

This is a simple authentication system built with Node.js, Express, Passport.js, MongoDB, and EJS. It includes features for user registration, login, and session management, with flash messages for user feedback.

Features
User Registration with Full Name, Email, Date of Birth, Phone Number, and Password.
Login functionality using Passport.js with email and password authentication.
Flash messages for error handling and success feedback.
MongoDB is used for storing user data securely with hashed passwords.
Bootstrap 5 is used for responsive and modern UI styling.
Technologies Used
Node.js - JavaScript runtime
Express - Web framework for Node.js
Passport.js - Authentication middleware for Node.js
MongoDB - NoSQL database for storing user information
Mongoose - MongoDB object modeling tool
EJS - Embedded JavaScript templating engine for rendering viewsAuthentication System with Node.js, Express, Passport.js, and MongoDB
This is a simple authentication system built with Node.js, Express, Passport.js, MongoDB, and EJS. It includes features for user registration, login, and session management, with flash messages for user feedback.

Features
User Registration with Full Name, Email, Date of Birth, Phone Number, and Password.
Login functionality using Passport.js with email and password authentication.
Flash messages for error handling and success feedback.
MongoDB is used for storing user data securely with hashed passwords.
Bootstrap 5 is used for responsive and modern UI styling.
Technologies Used
Node.js - JavaScript runtime
Express - Web framework for Node.js
Passport.js - Authentication middleware for Node.js
MongoDB - NoSQL database for storing user information
Mongoose - MongoDB object modeling tool
EJS - Embedded JavaScript templating engine for rendering views
bcryptjs - For hashing passwords
express-session - Middleware to manage session data
connect-flash - For flash messages
Bootstrap 5 - Frontend framework for UI components


Installation
Follow the steps below to set up the project on your local machine.
1. Clone the Repository
2. Install Dependencies
Make sure you have Node.js installed on your machine. Run the following command to install all the necessary dependencies:
npm install
4. Set Up MongoDB
Ensure you have MongoDB installed and running on your local machine. You can download and install it from MongoDB.
Alternatively, you can use a cloud-based MongoDB service like MongoDB Atlas. If using MongoDB Atlas, replace the MONGO_URL variable in app.js with your connection string.

5. Run the Application
Once everything is set up, start the server by running:

npm app.js
Your app will be running at http://localhost:3000/login

Routes
GET /signup - Displays the user registration page.
POST /signup - Handles user registration and stores user data in MongoDB.
GET /login - Displays the login page.
POST /login - Authenticates the user and starts the session.
GET /logout - Logs the user out and ends the session.
