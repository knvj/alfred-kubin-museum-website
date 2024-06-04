const mongoose = require('mongoose');

const eventSchema = mongoose.Schema({

    name: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    details: {
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    tickets:{
        type: String,
        required: true
    }
}, {
    timestamps: true
})

const eventModel = mongoose.model('Event', eventSchema);

module.exports = eventModel;