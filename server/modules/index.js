const auth = require('./authentication/auth.route');
const drive = require('./drive/drive.route');

class Routes {
    constructor(app) {
        app.use('/auth', auth);
        app.use('/drive', drive);
    }
}

module.exports = Routes;
