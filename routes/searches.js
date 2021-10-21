const express = require('express');
const router = express.Router();
const searchCtrl = require('../controllers/searches');

router.post('/searches/index', searchCtrl.allEvents);
router.get('/searches/index', searchCtrl.index);

module.exports = router;