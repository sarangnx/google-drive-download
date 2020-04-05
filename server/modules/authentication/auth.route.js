const express = require('express');

const router = express.Router();
const Controller = require('./auth.controller');
controller = new Controller();

// router.post('/user', jwtAuth, Controller.createUser);

router.get('/generate', controller.generateUrl);

module.exports = router;
