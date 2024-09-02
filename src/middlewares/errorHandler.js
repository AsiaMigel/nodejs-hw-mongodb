import { isHttpError } from 'http-errors';

export async function errorHandler(err, req, res, next) {
    if (isHttpError === true) {
        return res.status(err.status).json({
            status: err.status,
            message: err.message,
            data: err,
        });
    }
    console.log(err);

    res.status(500).json({
        status: 500,
        message: 'Something went wrong',
        data: err.message,
    });
    
};