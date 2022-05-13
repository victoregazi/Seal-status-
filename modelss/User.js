const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({
    meter: {
        type: String,
        required: true
    },
    old: {
        type: String,
        required: true
    },
    newmeter: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

const User = mongoose.model('User', UserSchema);

module.exports = User;