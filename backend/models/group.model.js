const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const groupSchema = new Schema({
    userId: { type: String, required: true },
    groupName: { type: String, required: true },
    courses: { type: Array, required: true }
}, {
    timestamps: true
});

const Group = mongoose.model('Group', groupSchema);

module.exports = Group;