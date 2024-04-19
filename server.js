const express = require('express');
const app = express();
const authenticate = require('./middlewares/auth');
const customerRoutes = require('./routes/customerRoutes');
const animalRoutes = require('./routes/animalRoutes');
const breedRoutes = require('./routes/breedRoutes');
const noteRoutes = require('./routes/noteRoutes');
const searchRoutes = require('./routes/searchRoutes'); // Importing the search routes

const PORT = process.env.PORT || 3000;

app.use(express.json()); // Middleware to parse JSON bodies

// Health check route
app.get('/health', (req, res) => {
  res.status(200).send('API is up and running');
});

// Apply the authentication middleware to all other requests
app.use(authenticate);

// Middleware to log each request
app.use((req, res, next) => {
    console.log(`Incoming Request: ${req.method} ${req.path}`);
    next();
});

// Welcome route with more detailed information
app.get('/', (req, res) => {
    res.json({
        message: 'Welcome to ppdb-api-v6_',
        version: '1.0.0',
        availableEndpoints: [
            { method: 'GET', path: '/', description: 'API Information' },
            { method: 'GET', path: '/health', description: 'API Health Check' },
            { method: 'GET', path: '/customers', description: 'Retrieve all customers' },
            { method: 'GET', path: '/customers/:id', description: 'Retrieve a specific customer' },
            { method: 'POST', path: '/customers', description: 'Create a new customer' },
            { method: 'PUT', path: '/customers/:id', description: 'Update a customer' },
            { method: 'DELETE', path: '/customers/:id', description: 'Delete a customer' },
            { method: 'GET', path: '/animals', description: 'Retrieve all animals' },
            { method: 'GET', path: '/animals/:id', description: 'Retrieve a specific animal' },
            { method: 'POST', path: '/animals', description: 'Create a new animal' },
            { method: 'PUT', path: '/animals/:id', description: 'Update an animal' },
            { method: 'DELETE', path: '/animals/:id', description: 'Delete an animal' },
            { method: 'GET', path: '/breeds', description: 'Retrieve all breeds' },
            { method: 'GET', path: '/breeds/:id', description: 'Retrieve a specific breed' },
            { method: 'POST', path: '/breeds', description: 'Create a new breed' },
            { method: 'PUT', path: '/breeds/:id', description: 'Update a breed' },
            { method: 'DELETE', path: '/breeds/:id', description: 'Delete a breed' },
            { method: 'GET', path: '/notes', description: 'Retrieve all notes' },
            { method: 'GET', path: '/notes/:id', description: 'Retrieve a specific note' },
            { method: 'POST', path: '/notes', description: 'Create a new note' },
            { method: 'PUT', path: '/notes/:id', description: 'Update a note' },
            { method: 'DELETE', path: '/notes/:id', description: 'Delete a note' },
            { method: 'GET', path: '/search', description: 'Search across multiple fields' } // Added search endpoint description
        ]
    });
});

// Customer routes
app.use('/customers', customerRoutes);

// Animal routes
app.use('/animals', animalRoutes);

// Breed routes
app.use('/breeds', breedRoutes);

// Note routes
app.use('/notes', noteRoutes);

// Search routes
app.use('/search', searchRoutes); // Using the search routes

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(`Error occurred: ${err.message}, Stack: ${err.stack}`); // Log the full error message and stack trace
    res.status(500).json({ error: 'Something went wrong!' });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});