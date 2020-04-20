const express = require('express');

const router = express.Router();
const Controller = require('./user.controller');
const controller = new Controller();

// get user profile
router.get('/profile', controller.profile);

module.exports = router;
