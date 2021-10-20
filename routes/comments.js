const express = require('express');
const router = express.Router();
const commentsCtrl = require('../controllers/comments');
const isLoggedIn = require('../config/auth');

router.post('/events/:id/comments', commentsCtrl.create);
router.delete('/comments/:id', isLoggedIn, commentsCtrl.delete);

module.exports = router;