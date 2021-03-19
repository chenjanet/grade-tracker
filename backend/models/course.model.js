const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const courseSchema = new Schema({
    username: { type: String, required: true },
    name: { type: String, required: true },
    grades: { type: Array, required: true }
}, {
    timestamps: true
});

const Course = mongoose.model('Course', courseSchema);

module.exports = Course;

