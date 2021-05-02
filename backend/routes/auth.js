const router = require('express').Router();
let User = require('../models/user.model');

router.route('/login').post((req, res) => {
    User.findOne({ 'username': req.body.username })
        .then(user => {
            if (user.password === req.body.password) {
                res.send({ token: 'test123' });
            } else {
                res.send({ token: '' });
            }
        })
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/register').post((req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    const newUser = new User({username, password});

    newUser.save()
        .then(() => res.send({ token: 'test123' }))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;