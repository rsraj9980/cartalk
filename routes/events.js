const express = require('express');
const router = express.Router();
const eventCtrl = require('../controllers/events');
const isLoggedIn = require('../config/auth');


router.get('/', eventCtrl.index);
router.get('/new', isLoggedIn, eventCtrl.new);
router.get('/search', eventCtrl.search);
router.get('/:id', eventCtrl.show);
router.post('/', isLoggedIn, eventCtrl.create);
router.delete('/:id', eventCtrl.delete);
router.get('/:id/edit', eventCtrl.edit);
router.put('/:id', eventCtrl.update);


module.exports = router;