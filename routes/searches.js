const express = require('express');
const router = express.Router();
const searchCtrl = require('../controllers/searches');

router.get('/search', searchCtrl.search);

module.exports = router;