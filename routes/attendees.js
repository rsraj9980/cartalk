const express = require('express');
const router = express.Router();
const attendeesCtrl = require('../controllers/attendees');

// POST /events/:eventId/attendees
router.post('/events/:id/attendees', attendeesCtrl.addToAttendee);

module.exports = router;