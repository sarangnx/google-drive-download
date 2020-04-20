const Helper = require('./user.helper');
const helper = new Helper();

class UserController {
    /**
     * Get user profile
     */
    async profile(req, res, next) {
        try {
            const { tokens } = req.session;
            let { profile } = req.session;

            // if profile is not in session fetch it.
            if (!profile) {
                // set auth token
                await helper.setToken(tokens);
                // get profile
                profile = await helper.profile();
                // add it to session
                req.session.profile = profile;
            }

            res.json({
                profile
            });
        } catch (err) {
            next(err);
        }
    }
}

module.exports = UserController;
