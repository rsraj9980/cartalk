const Event = require('../models/event');

module.exports = {
    index,
    allEvents
};

function index(req, res) {
    res.render('searches/index', { title: 'Search Events', events: [] });
}

function allEvents(req, res) {
    let eventQuery = req.body.city ? { city: new RegExp(req.body.city, 'i') } : {};
    Event.find(eventQuery, function(err, events) {
        res.render('searches/index', {
            events,
            user: req.user,
            citySearch: req.body.city
        });
    });
}