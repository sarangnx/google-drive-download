const Helper = require('./user.helper');
const helper = new Helper();

class UserController {
    /**
     * Get user profile
     */
    async profile(req, res, next) {
        try {
            const { tokens } = req.session;

            await helper.setToken(tokens);

            const profile = await helper.profile();

            res.json({
                profile,
            });
        } catch (err) {
            next(err);
        }
    }
}

module.exports = UserController;
