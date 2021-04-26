const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const courseSchema = new Schema({
    username: { type: String, required: true },
    groupname: { type: String, required: true },
    coursename: { type: String, required: true },
    grades: { type: Array, required: true },
    average: { type: Number }
}, {
    timestamps: true
});

const Course = mongoose.model('Course', courseSchema);

module.exports = Course;

