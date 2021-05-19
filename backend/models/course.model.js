const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const courseSchema = new Schema({
    userid: { type: String, required: true },
    groupid: { type: String, required: true },
    coursename: { type: String, required: true },
    grades: { type: Array, required: true },
    average: { type: Number },
    weight: { type: Number }
}, {
    timestamps: true
});

const Course = mongoose.model('Course', courseSchema);

module.exports = Course;

