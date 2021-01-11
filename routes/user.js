const router = require('express').Router();


router.get('', (req, res, next) => {
    let user = req.user;

    res.render('user', { user: user });
});


module.exports = router;
