const express = require('express');
const passport = require('passport');
const session = require('express-session');
const dotenv = require('dotenv');
const authRoutes = require('./routes/auth');

// Load environment variables from .env file
dotenv.config()

// Import Passport configuration
require('./config/passport');

// Authentication Routes
const authRoutes = require('./routes/auth');

// Initializes server
const app = express();

// Middleware to parse incoming JSON data
app.use(express.json());
app.use(express.urlencoded({ extended: true}));

// Session startup
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
}));

// Passport setup
app.use(passport.initialize());
app.use(passport.session());

// Routes
app.use('/auth', authRoutes);

// Basic route
app.get('/', (req, res) => {
    res.send('Welcome to the Polling Website API!');
});


const PORT = process.env.PORT || 3001;
app.listen(PORT, ()=> console.log(`Server running on port ${PORT}`));
