const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const eventSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    venue: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    attendees: [{
        type: Schema.Types.ObjectId,
        ref: 'User'
    }],
    date: {
        type: Date,
        required: true
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Event', eventSchema);