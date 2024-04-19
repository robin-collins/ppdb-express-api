const logger = {
    log: function(message) {
        console.log(new Date().toISOString() + " - LOG: " + message);
    },
    error: function(message, error) {
        console.error(new Date().toISOString() + " - ERROR: " + message);
        console.error(error.stack);
    }
};

module.exports = logger;