const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const courseSchema = new Schema({
    userId: { type: String, required: true },
    groupId: { type: String, required: true },
    courseName: { type: String, required: true },
    grades: { type: Array, required: true },
    average: { type: Number },
    weight: { type: Number }
}, {
    timestamps: true
});

const Course = mongoose.model('Course', courseSchema);

module.exports = Course;

