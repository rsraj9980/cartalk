const Event = require('../models/event');

module.exports = {
    search
};

function search(req, res) {
    res.render('searches/search', { title: 'Search Events' });
}