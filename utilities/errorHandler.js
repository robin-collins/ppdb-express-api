function errorHandler(err, req, res, next) {
    console.error('Error occurred:', err.message, err.stack);
    res.status(500).json({ message: 'An error occurred', error: err.message });
}
module.exports = errorHandler;