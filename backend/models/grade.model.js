const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const gradeSchema = new Schema({
    username: { type: String, required: true },
    course: { type: String, required: true },
    name: { type: String, required: true },
    grade: { type: Number, required: true },
    weight: { type: Number }
}, {
    timestamps: true
});

const Grade = mongoose.model('Grade', gradeSchema);

module.exports = Grade;