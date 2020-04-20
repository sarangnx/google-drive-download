const auth = require('./authentication/auth.route');
const drive = require('./drive/drive.route');
const user = require('./user/user.route');

class Routes {
    constructor(app) {
        app.use('/auth', auth);
        app.use('/drive', drive);
        app.use('/user', user);
    }
}

module.exports = Routes;
