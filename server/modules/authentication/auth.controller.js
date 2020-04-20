const Helper = require('./auth.helper');
const helper = new Helper();

class AuthController {
    /**
     * Generate url for user authorization.
     * Send the url to web client.
     */
    async generateUrl(req, res, next) {
        try {
            const url = await helper.generateUrl();

            res.cookie('auth', false, { maxAge: 6000000 });
            res.redirect(url);
        } catch (err) {
            next(err);
        }
    }

    /**
     * Get token after user authorizes using url
     * from generateUrl and redirect to homepage
     * with parameter auth set to true.
     */
    async getToken(req, res, next) {
        try {
            const { code } = req.query;

            const tokens = await helper.getToken(code);

            // save tokens in session storage
            req.session.tokens = tokens;

            res.cookie('auth', true, { maxAge: 6000000 });
            res.redirect('/');
        } catch (err) {
            next(err);
        }
    }

    /**
     * Send status, whether user authorization
     * is success or not.
     */
    isAuthorized(req, res, next) {
        try {
            const authorized = helper.isAuthorized();

            res.json({
                authorized
            });
        } catch (err) {
            next(err);
        }
    }

    /**
     * Logout user by destroying the session.
     */
    async logout(req, res, next) {
        try {
            // destroy session
            req.session.destroy();
            // destory cookie
            res.cookie('auth', false, { maxAge: 6000000 });

            res.json({
                message: 'Logged out.'
            });
        } catch (err) {
            next(err);
        }
    }
}

module.exports = AuthController;
