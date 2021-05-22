const router = require('express').Router();
let Group = require('../models/group.model');

router.route('/').get((req, res) => {
    Group.find()
        .then(groups => res.json(groups))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const userId = req.body.userId;
    const groupName = req.body.groupName;
    const courses = req.body.courses;

    const newGroup = new Group({
        userId,
        groupName,
        courses
    });

    newGroup.save()
        .then(group => {
            res.json(group._id);
            console.log(res.json);
        })
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
    Group.findById(req.params.id)
        .then(group => res.json(group))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
    Group.findByIdAndDelete(req.params.id)
        .then(() => {
            
            res.json('Group deleted.')
        })
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
    Group.findById(req.params.id)
        .then((group) => {
            group.userId = req.body.userId;
            group.groupName = req.body.groupName;
            group.courses = req.body.courses;

            group.save()
                .then(() => res.json('Group updated.'))
                .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;