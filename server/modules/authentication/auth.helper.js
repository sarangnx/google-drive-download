const { google } = require('googleapis');

class AuthHelper {
    constructor() {
        this.client = new google.auth.OAuth2(
            process.env.CLIENT_ID,
            process.env.CLIENT_SECRET,
            process.env.REDIRECT_URL
        );
    }

    scopes = ['https://www.googleapis.com/auth/drive'];

    /**
     * Set this to true when a user authorizes oauth2,
     * and credentials are set in client.
     */
    authorized = false;

    /**
     * Getter for authorized.
     */
    isAuthorized() {
        return this.authorized;
    }

    /**
     * Generate url for user authorization
     */
    async generateUrl() {
        const url = await this.client.generateAuthUrl({
            scope: this.scopes
        });

        return url;
    }

    /**
     * After authorization fom url, a callback is invoked with
     * authorization code. This can be used to get tokens for
     * API access.
     *
     * @param {String} code - Authorization code returned to callback
     */
    async getToken(code) {
        if (!code) {
            throw new Error('Unauthorized');
        }

        const { tokens } = await this.client.getToken(code);

        this.client.setCredentials(tokens);
        this.authorized = true;

        return tokens;
    }
}

module.exports = AuthHelper;
