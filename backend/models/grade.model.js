const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const gradeSchema = new Schema({
    name: { type: String, required: true },
    grade: { type: Number, required: true },
    weight: { type: Number }
}, {
    timestamps: true
});

const Grade = mongoose.model('Grade', gradeSchema);

module.exports = Grade;