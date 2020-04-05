const auth = require('./authentication/auth.route');

class Routes {
    constructor(app) {
        app.use('/auth', auth);
    }
}

module.exports = Routes;
