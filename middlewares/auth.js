const dotenv = require('dotenv');
dotenv.config();

// Ensure API_KEYS are loaded correctly
const authorizedKeys = process.env.API_KEYS ? process.env.API_KEYS.split(',').map(key => key.trim().replace(/[\r\n]+/gm, "")) : [];
console.log("Authorized keys loaded:", authorizedKeys); // Debugging line to verify keys are loaded

const authenticate = (req, res, next) => {
    // Extract API key in a case-insensitive manner
    const apiKey = req.headers['x-api-key'] || req.headers['X-API-KEY'];
    console.log("Received API key:", apiKey); // Debugging line to check received API key

    if (!apiKey) {
        console.error('API key is missing in the request headers');
        return res.status(401).json({ error: 'API key is missing' });
    }

    if (!authorizedKeys.includes(apiKey)) {
        console.error(`Unauthorized access attempt with invalid API key: ${apiKey}`);
        return res.status(401).json({ error: 'Unauthorized: Invalid API key' });
    }

    console.log(`API key validated successfully for key: ${apiKey}`);
    next();
};

module.exports = authenticate;