const Event = require('../models/events');

module.exports = {
    index,
    new: newEvent,
    create,
    show
};

function index(req, res) {
    Event.find({}, function(err, events) {
        res.render('events/index', { title: 'All Events', events });
    });
}

function newEvent(req, res) {
    res.render('events/new', { title: 'Add Event' });
}


function show(req, res) {
    Event.findById(req.params.id)
        .populate('attendees')
        .exec(function(err, event) {
            console.log(event)
            res.render('events/show', { title: 'Event Detail', event });
        });
}

function create(req, res) {
    const event = new Event(req.body);
    event.save(function(err) {
        if (err) return res.redirect('/events/new');
        console.log(event);
        res.redirect(`/events/${event._id}`);
    });
}