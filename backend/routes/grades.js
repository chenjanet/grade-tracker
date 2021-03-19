const router = require('express').Router();
let Grade = require('../models/grade.model');

router.route('/').get((req, res) => {
    Grade.find()
        .then(grades => res.json(grades))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const username = req.body.username;
    const groupname = req.body.groupname;
    const coursename = req.body.coursename;
    const gradename = req.body.gradename;
    const grade = req.body.grade;
    const weight = req.body.weight;

    const newGrade = new Grade({
        username,
        groupname,
        coursename,
        gradename,
        grade,
        weight
    });

    newGrade.save()
        .then(() => res.json('Grade added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;