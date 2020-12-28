const router = require('express').Router();
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;

const settings = require('../settings.json');

passport.use(new GoogleStrategy(
    {
        clientID: settings.client_id,
        clientSecret: settings.client_secret,
        callbackURL: settings.callback_url
    },
    (accessToken, refreshToken, profile, done) => {
        User.findOrCreate({ googleId: profile.id }, (err, user) => {
            return done(err, user);
        });
    }
));


router.get('', (req, res, next) => {
    res.render('login');
});

router.get(
    '/auth/google',
    passport.authenticate('google', { scope: ['profile', 'email'] })
);

router.get(
    '/auth/google/done',
    passport.authenticate('google', { failureRedirect: '/login' }),
    (req, res, next) => {
        console.log(req.user);
        res.redirect('/');
    }
);


module.exports = router;
