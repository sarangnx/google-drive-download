const { google } = require('googleapis');
const axios = require('axios');
const mime = require('mime');
const APIError = require('../utils/error');

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
            throw new APIError('Session Exprired.', 401, 'SESSION_EXPIRED');
        }

        await this.client.setCredentials(tokens);
    }

    /**
     * Download given url to google drive.
     *
     * @param {String} url - Resource url
     * @param {String} filename - Filename with extension
     * @param {Object} io - Socket io instance
     * @param {String} id - Socket io room id
     */
    async download(url, filename, io, id) {
        if(!url) {
            throw new APIError('No Url given', 400, 'MISSING_URL');
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

        const fileSize = res.headers['content-length'];
        const fileType = res.headers['content-type'];
        const ext = mime.getExtension(fileType);

        // default file naming scheme
        if(!filename) {
            filename = `${Date.now()}.${ext}`;
        }

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
        },{
            onUploadProgress: (e) => {
                const progress = (e.bytesRead / fileSize) * 100;
                io.sockets.in(id).emit('upload:progress', { progress });
            }
        });
    }
}

module.exports = DriveHelper;
