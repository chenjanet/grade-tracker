const router = require('express').Router();
let Course = require('../models/course.model');

router.route('/').get((req, res) => {
    Course.find()
        .then(courses => res.json(courses))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const username = req.body.username;
    const groupname = req.body.groupname;
    const coursename = req.body.coursename;
    const grades = req.body.grades;
    const average = req.body.average || 0;

    const newCourse = new Course({
        username,
        groupname,
        coursename,
        grades,
        average
    });

    newCourse.save()
        .then(() => res.json('Course added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
    Course.findById(req.params.id)
        .then(course => res.json(course))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
    Course.findByIdAndDelete(req.params.id)
        .then(() => res.json('Course deleted.'));
});

router.route('/update/:id').post((req, res) => {
    Course.findById(req.params.id)
        .then((course) => {
            course.username = req.body.username;
            course.groupname = req.body.groupname;
            course.coursename = req.body.coursename;
            course.grades = req.body.grades;
            course.average = req.body.avg || 0;

            course.save()
                .then(() => res.json('Course updated.'))
                .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;