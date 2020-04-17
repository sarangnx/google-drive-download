// Custom error
class APIError extends Error {
    constructor(message,statusCode, type) {
        super(message);

        this.name = this.constructor.name;
        this.statusCode = statusCode;
        this.type = type;
    }
}

module.exports = APIError;
