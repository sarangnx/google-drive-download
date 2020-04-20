const express = require('express');

const router = express.Router();
const Controller = require('./auth.controller');
const controller = new Controller();

router.get('/generate', controller.generateUrl);

router.get('/callback', controller.getToken);

router.get('/isauthorized', controller.isAuthorized);

router.post('/logout', controller.logout);

module.exports = router;
