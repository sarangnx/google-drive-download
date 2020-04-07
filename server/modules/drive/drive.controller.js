const Helper = require('./drive.helper');
const helper = new Helper();

class DriveController {

    /**
     * Download the url to google drive
     */
    async download(req, res, next) {
        try {
            const { tokens } = req.session;
            const { url } = req.body;

            await helper.setToken(tokens);
            helper.download(url);

            res.json({
                message: 'File added to download queue.'
            });
        } catch (err) {
            next(err);
        }
    }
}

module.exports = DriveController;
