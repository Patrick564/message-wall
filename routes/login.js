require('dotenv').config();
const router = require('express').Router();
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;

passport.serializeUser((user, done) => {
    done(null, user);
});

passport.deserializeUser((user, done) => {
    // User.findById(id, (err, user) => {
    //     DelayNode(err, user);
    // });
    done(null, user);
});

passport.use(new GoogleStrategy(
    {
        clientID: process.env.CLIENT_ID,
        clientSecret: process.env.CLIENT_SECRET,
        callbackURL: process.env.CALLBACK_URL
    },
    (accessToken, refreshToken, profile, done) => {
        // User.findOrCreate({ googleId: profile.id }, (err, user) => {
        //     return done(err, user);
        // });
        console.log(profile._json);
        return done(null, profile);
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
