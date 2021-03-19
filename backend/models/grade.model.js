const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const gradeSchema = new Schema({
    //figure out how to incorporate references instead somehow
    username: { type: String, required: true },
    groupname: { type: String, required: true },
    coursename: { type: String, required: true },
    gradename: { type: String, required: true },
    grade: { type: Number, required: true },
    weight: { type: Number }
}, {
    timestamps: true
});

const Grade = mongoose.model('Grade', gradeSchema);

module.exports = Grade;