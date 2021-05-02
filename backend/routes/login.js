const router = require('express').Router();
let User = require('../models/user.model');

router.route('/').post((req, res) => {
    User.findOne({ "username": req.body.username })
        .then(user => {
            if (user.password === req.body.password) {
                res.send({ token: 'test123' });
            } else {
                res.send({ token: '' });
            }
        })
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;