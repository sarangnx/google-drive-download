const Helper = require('./drive.helper');
const helper = new Helper();

class DriveController {

    /**
     * Download the url to google drive
     */
    async download(req, res, next) {
        try {
            const { tokens } = req.session;
            const { url, filename } = req.body;

            await helper.setToken(tokens);
            /**
             * No need to wait for completion of the process,
             * as it might take a long time to complete.
             */
            helper.download(url, filename);

            res.json({
                message: 'File added to download queue.'
            });
        } catch (err) {
            next(err);
        }
    }
}

module.exports = DriveController;
