const router = require('express').Router();
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;

const settings = require('../settings.json');

const authParams = {
    clientID: settings.client_id,
    clientSecret: settings.client_secret,
    callbackURL: settings.callback_url
};

passport.use(new GoogleStrategy(authParams, (accessToken, refreshToken, profile, done) => {
    console.log(accessToken);
}));


router.get('', (req, res, next) => {
    res.send('Halooooo');
});


module.exports = router;
