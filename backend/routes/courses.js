const router = require('express').Router();
let Course = require('../models/course.model');
let Group = require('../models/group.model');

router.route('/').get((req, res) => {
    Course.find()
        .then(courses => res.json(courses))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const userId = req.body.userId;
    const groupId = req.body.groupId;
    const courseName = req.body.courseName;
    const grades = req.body.grades;
    const average = req.body.average || 0;
    const weight = req.body.weight || 1;

    const newCourse = new Course({
        userId,
        groupId,
        courseName,
        grades,
        average,
        weight
    });

    newCourse.save()
        .then((course) => {
            Group.findById(req.body.groupId)
                .then((group) => {
                    group.courses.push(req.body.courseName);
                    group.save();
                });
            res.json(course._id);
        })
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/getByGroup/:groupId').get((req, res) => {
    Course.find({ "groupId": req.params.groupId })
        .then(courses => res.json(courses));
});

router.route('/:id').get((req, res) => {
    Course.findById(req.params.id)
        .then(course => res.json(course))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
    Course.findByIdAndDelete(req.params.id)
        .then(() => res.json('Course deleted.'))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/deleteByGroup/:groupId').delete((req, res) => {
    Course.find({ "groupId": req.params.groupId })
        .then(async (courses) => {
            res.json(courses);
            for (let course in courses) {
                await Course.findByIdAndDelete(courses[course]._id);
            }
        })
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
    Course.findById(req.params.id)
        .then((course) => {
            course.userId = req.body.userId;
            course.groupId = req.body.groupId;
            course.courseName = req.body.courseName;
            course.grades = req.body.grades;
            course.average = req.body.average || 0;
            course.weight = req.body.weight || 1;

            course.save()
                .then(() => res.json('Course updated.'))
                .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/addGrade/:id').post((req, res) => {
    Course.findById(req.params.id)
        .then((course) => {
            course.average += req.body.grade.weightedGrade;
            course.grades.push(req.body.grade);
            course.save()
                .then(() => res.json('Grade added.'))
                .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err));
})

module.exports = router;