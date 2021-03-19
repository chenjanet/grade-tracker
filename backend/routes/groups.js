const router = require('express').Router();
let Group = require('../models/group.model');

router.route('/').get((req, res) => {
    Group.find()
        .then(groups => res.json(groups))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const username = req.body.username;
    const groupname = req.body.groupname;
    const description = req.body.description || "";

    const newGroup = new Group({
        username,
        groupname,
        description
    });

    newGroup.save()
        .then(() => res.json('Course group added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;