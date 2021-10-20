const Event = require('../models/event');

module.exports = {
    create,
    delete: deleteComment
};

async function deleteComment(req, res) {
    const event = await Event.findOne({ 'comments._id': req.params.id });
    const comment = event.comments.id(req.params.id);
    // Ensure that the comment was created by the logged in user
    if (!comment.user.equals(req.user._id)) return res.redirect(`/events/${event._id}`);
    comment.remove();
    await event.save();
    res.redirect(`/events/${event._id}`);
}

function create(req, res) {
    Event.findById(req.params.id, function(err, event) {
        req.body.user = req.user._id;
        req.body.userName = req.user.name;
        req.body.userAvatar = req.user.avatar;
        event.comments.push(req.body);
        event.save(function(err) {
            res.redirect(`/events/${event._id}`);
        });
    });
}