// const { events } = require('../models/event');
const Event = require('../models/event');

module.exports = {
    index,
    new: newEvent,
    create,
    show,
    delete: deleteEvent,
    edit,
    update
};

function index(req, res) {
    Event.find({}, function(err, events) {
        console.log(events);
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
    event.user = req.user._id;
    event.save(function(err) {
        if (err) return res.redirect('/events/new');
        console.log(event);
        res.redirect(`/events/${event._id}`);
    });
}

function deleteEvent(req, res) {
    Event.findByIdAndDelete({ _id: req.params.id, user: req.user._id }, function(err) {
        res.redirect('/events');
    });
}


function edit(req, res) {
    Event.findById({ _id: req.params.id, user: req.user._id }, function(err, event) {
        if (err) {
            res.redirect(`/events/${req.params.id}`);
        }
        res.render("events/edit", {
            event,
            title: "Edit Event"
        });
    });
}

function update(req, res) {
    Event.findByIdAndUpdate(req.params.id, req.body, function(err, event) {
        if (err) {
            res.render("events/edit", { event, title: "Update Event" });
        }
        res.redirect(`/events/${event._id}`);
    });
}