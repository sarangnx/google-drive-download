const { google } = require('googleapis');

class AuthHelper{
    constructor() {
        this.client = new google.auth.OAuth2(
            process.env.CLIENT_ID,
            process.env.CLIENT_SECRET,
            process.env.REDIRECT_URL
        );
    }

    scopes = [
        'https://www.googleapis.com/auth/drive'
    ]

    /**
     * Generate url for user authorization
     */
    async generateUrl() {
        const url = await this.client.generateAuthUrl({
            scope: this.scopes
        });

        return url;
    }

};

module.exports = AuthHelper;
