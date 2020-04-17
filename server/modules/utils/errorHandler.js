
module.exports = function (err, req, res, next) {
    if(process.env.NODE_ENV !== 'production'){
        consola.error(err);
    }

    let response = {};

    // Send message to user only if it is an APIError
    if(err.name === 'APIError'){
        response =  {
            message: err.message,
            type: err.type,
        }
    } else {
        response =  {
            message: 'Something went wrong.',
            type: 'INTERNAL_SERVER_ERROR',
        }
    }

    const code = parseInt(err.statusCode, 10) || 500;

    res.status(code);
    res.json({
        error: response
    });
}
