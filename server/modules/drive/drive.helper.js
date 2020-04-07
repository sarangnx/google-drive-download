const { google } = require('googleapis');
const { parse } = require('url');
const httpGet = require('http').get;
const httpsGet = require('https').get;

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
        await this.client.setCredentials(tokens);
    }

    async download(url) {
        const { protocol } = parse(url);
        const get = protocol === 'http:' ? httpGet : httpsGet;

        await get(url, async (res) => {
            await this.drive.files.create({
                requestBody: {
                    name: 'test.jpg'
                },
                media: {
                    body: res,
                },
            });
        });
    }
}

module.exports = DriveHelper;
