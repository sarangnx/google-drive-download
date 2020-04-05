const Helper = require('./auth.helper');

class AuthController {

    constructor() {
        this.helper = new Helper();
    }

    /**
     * Generate url for user authorization.
     * Send the url to web client.
     */
    async generateUrl(req, res, next) {
        const url = await this.helper.generateUrl();

        res.redirect(url);
    }

    /**
     * Get token after user authorizes using url
     * from generateUrl and redirect to homepage
     * with parameter auth set to true.
     */
    async getToken(req, res, next) {
        const { code } = req.query;

        const tokens = await this.helper.getToken(code);

        // save tokens in session storage
        req.session.tokens = tokens;

        res.redirect('/?auth=true');
    }

    /**
     * Send status, whether user authorization
     * is success or not.
     */
    isAuthorized(req, res, next) {
        const authorized = this.helper.isAuthorized();

        res.json({
            authorized,
        });
    }
};

module.exports = AuthController;
