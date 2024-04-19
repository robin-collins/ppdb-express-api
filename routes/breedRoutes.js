const express = require('express');
const router = express.Router();
const Breed = require('../models/Breed');
const errorHandler = require('../utilities/errorHandler'); // Centralized error handling
const logger = require('../utilities/logger'); // Centralized logging

// Retrieve all breeds
router.get('/', async (req, res) => {
    try {
        const breeds = await Breed.findAll();
        logger.log('Retrieved all breeds');
        res.json(breeds);
    } catch (error) {
        logger.error('Error retrieving breeds:', error.message, error.stack);
        errorHandler(error, req, res);
    }
});

// Retrieve a specific breed by id
router.get('/:id', async (req, res) => {
    try {
        const breed = await Breed.findByPk(req.params.id);
        if(breed) {
            logger.log(`Retrieved breed with id ${req.params.id}`);
            res.json(breed);
        } else {
            logger.log(`Breed not found with id ${req.params.id}`);
            res.status(404).json({ message: 'Breed not found' });
        }
    } catch (error) {
        logger.error(`Error retrieving breed with id ${req.params.id}:`, error.message, error.stack);
        errorHandler(error, req, res);
    }
});

// Create a new breed
router.post('/', async (req, res) => {
    try {
        const newBreed = await Breed.create(req.body);
        logger.log('Created a new breed', newBreed);
        res.status(201).json(newBreed);
    } catch (error) {
        logger.error('Failed to create a new breed:', error.message, error.stack);
        res.status(400).json({ message: 'Failed to create breed', error: error.message });
    }
});

// Update a breed
router.put('/:id', async (req, res) => {
    try {
        const updated = await Breed.update(req.body, { where: { breedid: req.params.id } });
        if (updated[0] > 0) {
            logger.log(`Updated breed with id ${req.params.id}`);
            res.json({ message: 'Breed updated' });
        } else {
            logger.log(`Breed not found with id ${req.params.id}`);
            res.status(404).json({ message: 'Breed not found' });
        }
    } catch (error) {
        logger.error(`Failed to update breed with id ${req.params.id}:`, error.message, error.stack);
        errorHandler(error, req, res);
    }
});

// Delete a breed
router.delete('/:id', async (req, res) => {
    try {
        const numDeleted = await Breed.destroy({ where: { breedid: req.params.id } });
        if (numDeleted > 0) {
            logger.log(`Deleted breed with id ${req.params.id}`);
            res.json({ message: 'Breed deleted' });
        } else {
            logger.log(`Breed not found with id ${req.params.id}`);
            res.status(404).json({ message: 'Breed not found' });
        }
    } catch (error) {
        logger.error(`Failed to delete breed with id ${req.params.id}:`, error.message, error.stack);
        errorHandler(error, req, res);
    }
});

module.exports = router;