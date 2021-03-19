const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const groupSchema = new Schema({
    username: { type: String, required: true },
    groupname: { type: String, required: true },
    description: { type: String },
    courses: { type: Array, required: true }
}, {
    timestamps: true
});

const Group = mongoose.model('Group', groupSchema);

module.exports = Group;