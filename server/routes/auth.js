const express = require('express');
const passport = require('passport');

const router = express.Router();

// Route to start Google login
router.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

// Hangle Google callback
router.get('/google.callback', passport.authenticate('google', {failureRedirect: '/' }),
    (req, res) => {
        res.redirect('/dashboard'); // Redirect to the dashboard after login
    }
);

// Logout route
router.get('/logout', (req, res) => {
    req.logout();
    res.redirect('/');
});

module.exports = router;
