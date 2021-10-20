const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new Schema({
    content: String,
    user: { type: Schema.Types.ObjectId, ref: 'User' },
    userName: String,
    userAvatar: String
}, {
    timestamps: true
});

const eventSchema = new Schema({
    user: { type: Schema.Types.ObjectId, ref: 'User' },
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
    city: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    comments: [commentSchema]
}, {
    timestamps: true
});

module.exports = mongoose.model('Event', eventSchema);