const express = require('express');

const router = express.Router();
const Controller = require('./drive.controller');
const controller = new Controller();

module.exports = router;
