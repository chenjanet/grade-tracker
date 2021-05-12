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
    const courses = req.body.courses;

    const newGroup = new Group({
        username,
        groupname,
        courses
    });

    newGroup.save()
        .then(() => res.json('Group added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
    Group.findById(req.params.id)
        .then(group => res.json(group))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
    Group.findByIdAndDelete(req.params.id)
        .then(() => res.json('Group deleted.'));
});

router.route('/update/:id').post((req, res) => {
    Group.findById(req.params.id)
        .then((group) => {
            group.username = req.body.username;
            group.groupname = req.body.groupname;
            group.courses = req.body.courses;

            group.save()
                .then(() => res.json('Group updated.'))
                .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;