const express = require('express');
const passport = require('passport');
const router = express.Router();
const isAuthenticated = require('../middlewares/isAuthenticated');
const feedbackController = require('../controllers/feedbackController');

router.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

router.get('/google/callback', passport.authenticate('google', { failureRedirect: '/' }),
    (req, res) => {
        try {
            res.redirect('/');
        } catch {
            console.error();
        }

    });

// router.get('/auth/google',
//     passport.authenticate('google', { failureRedirect: '/' }),
//     (req, res) => {
//         res.redirect('/feedback');
//     });

router.get('/logout', (req, res) => {
    req.logout();
    res.redirect('/');
});

module.exports = router;
