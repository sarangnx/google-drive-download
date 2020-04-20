const { google } = require('googleapis');
const APIError = require('../utils/error');

class UserHelper {
    constructor() {
        this.client = new google.auth.OAuth2(
            process.env.CLIENT_ID,
            process.env.CLIENT_SECRET,
            process.env.REDIRECT_URL
        );

        this.people = google.people({
            version: 'v1',
            auth: this.client
        });
    }

    /**
     * Set token in the client to use apis.
     *
     * @param {Object} tokens - Tokens returned after authorization
     */
    async setToken(tokens) {
        if (!tokens) {
            throw new APIError('Session Exprired.', 401, 'SESSION_EXPIRED');
        }

        await this.client.setCredentials(tokens);
    }

    /**
     * Get profile of the logged in user.
     * 
     * Reference:
     * https://github.com/googleapis/google-api-nodejs-client/blob/master/samples/people/me.js
     */
    async profile() {
        // get name and photo of user
        const user = await this.people.people.get({
            resourceName: 'people/me',
            personFields: 'names,photos'
        });

        const name = user.data.names[0] ? user.data.names[0].givenName : null;
        const photo = user.data.photos[0] ? user.data.photos[0].url : null;

        return {
            name,
            photo
        }
    }
}

module.exports = UserHelper;
