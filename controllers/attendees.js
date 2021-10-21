const Event = require('../models/event');

module.exports = {
    addToAttendee
};

function addToAttendee(req, res) {
    Event.findById(req.params.id, function(err, event) {
        if (err) return res.redirect('/events');
        if (event.attendees.some(a => a.equals(req.user._id))) return res.redirect('/events');
        event.attendees.push(req.user._id);
        event.save(function(err) {
            res.redirect(`/events/${event._id}`);
        });
    });
}