const express = require('express');
const router = express.Router();
const searchCtrl = require('../controllers/searches');

router.get('/search', searchCtrl.search);
// router.post('/', searchCtrl.create);

module.exports = router;