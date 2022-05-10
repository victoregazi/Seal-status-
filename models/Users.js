const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: 'string',
        required: true,
        min: 6
    },
    Meter_Number: {
        type: 'number',
        required: true,
        max: 15
    },
    old_seal_number: {
        type: 'number',
        required: true,
        max: 15
    },
    new_seal_number: {
        type: 'number',
        required: true,
        max: 15
    },
    date: {
        type: 'Date',
        default: Date.now
    }
})

module.exports = mongoose.model('User', userSchema);