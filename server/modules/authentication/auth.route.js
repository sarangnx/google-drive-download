const express = require('express');

const router = express.Router();
const Controller = require('./auth.controller');
controller = new Controller();

// router.post('/user', jwtAuth, Controller.createUser);

router.get('/generate', controller.generateUrl);

router.get('/callback', controller.getToken);

router.get('/isauthorized', controller.isAuthorized);

module.exports = router;
