const express = require('express');
const router = express.Router();
const eventsCtrl = require('../controllers/events');
const isLoggedIn = require('../config/auth');

router.get('/', eventsCtrl.index);
router.get('/new', isLoggedIn, eventsCtrl.new);
router.get('/:id', eventsCtrl.show);
router.post('/', isLoggedIn, eventsCtrl.create);

module.exports = router;