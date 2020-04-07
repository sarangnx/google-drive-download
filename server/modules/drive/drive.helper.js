const { google } = require('googleapis');
const axios = require('axios');

class DriveHelper {
    constructor() {
        this.client = new google.auth.OAuth2(
            process.env.CLIENT_ID,
            process.env.CLIENT_SECRET,
            process.env.REDIRECT_URL
        );

        this.drive = google.drive({
            version: 'v3',
            auth: this.client
        });
    }

    /**
     * Set token in the client to use apis.
     *
     * @param {Object} tokens - Tokens returned after authorization
     */
    async setToken(tokens) {
        if(!tokens) {
            throw new Error('Session Exprired.');
        }

        await this.client.setCredentials(tokens);
    }

    /**
     * Download given url to google drive.
     *
     * @param {String} url - Resource url
     * @param {String} filename - Filename with extension
     */
    async download(url, filename = 'filename') {
        if(!url) {
            throw new Error('No Url given');
        }

        /**
         * Send a get request to the given url,
         * downloading it to the VM or hosted machine.
         * res.data will be a readable stream.
         */
        const res = await axios({
            method: 'get',
            url,
            responseType: 'stream'
        });

        /**
         * Pass the readable stream to upload the data
         * to google drive.
         */
        await this.drive.files.create({
            requestBody: {
                name: filename
            },
            media: {
                body: res.data,
            },
        });
    }
}

module.exports = DriveHelper;
