const Helper = require('./auth.helper');
const helper = new Helper();

class AuthController {

    /**
     * Generate url for user authorization.
     * Send the url to web client.
     */
    async generateUrl(req, res, next) {
        const url = await helper.generateUrl();

        res.redirect(url);
    }

};

module.exports = AuthController;
