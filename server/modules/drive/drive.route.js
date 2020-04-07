const express = require('express');

const router = express.Router();
const Controller = require('./drive.controller');
const controller = new Controller();

// download to google drive
router.post('/download', controller.download);

module.exports = router;
