const router = require('express').Router();


router.get('', (req, res, next) => {
    res.render('user', { user: user });
});


module.exports = router;
