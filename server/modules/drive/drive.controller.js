const Helper = require('./drive.helper');
const helper = new Helper();

class DriveController {

    /**
     * Download the url to google drive
     */
    async download(req, res, next) {
        const { tokens } = req.session;
        const { url } = req.body;

        await helper.setToken(tokens);
        await helper.download(url);

        res.end();
    }
}

module.exports = DriveController;
