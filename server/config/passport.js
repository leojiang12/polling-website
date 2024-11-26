const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

passport.port.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: '/auth/google/callback', // URL to handle Google's response
}, (accessToken, refreshToken, profile, done) => {
    //Save user info to database or session
    done(null, profile);
}));

// Serialize and deserialize user for session management
passport.serializeUser((user, done) => {
    done(unull, user);
});

passport.deserializeUser((user, done) => {
    done(null, user);
});