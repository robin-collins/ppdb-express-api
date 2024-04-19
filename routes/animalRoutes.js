const express = require('express');
const router = express.Router();
const Animal = require('../models/Animal');
const Customer = require('../models/Customer');

// Retrieve all animals
router.get('/', async (req, res) => {
    try {
        const animals = await Animal.findAll();
        console.log('Retrieved all animals');
        res.json(animals);
    } catch (error) {
        console.error('Failed to retrieve animals:', error.message, error.stack);
        res.status(500).json({ message: 'Error retrieving animals', error: error.message });
    }
});

// Retrieve a specific animal by id
router.get('/:id', async (req, res) => {
    try {
        const animal = await Animal.findByPk(req.params.id);
        if(animal) {
            console.log(`Retrieved animal with id ${req.params.id}`);
            res.json(animal);
        } else {
            console.log(`Animal not found with id ${req.params.id}`);
            res.status(404).json({ message: 'Animal not found' });
        }
    } catch (error) {
        console.error(`Error retrieving animal with id ${req.params.id}:`, error.message, error.stack);
        res.status(500).json({ message: 'Error retrieving animal', error: error.message });
    }
});

// Retrieve all animals for a specific customer
router.get('/customer/:customerid', async (req, res) => {
    try {
        const animals = await Animal.findAll({
            where: { customerid: req.params.customerid }
        });
        console.log(`Retrieved all animals for customer id ${req.params.customerid}`);
        res.json(animals);
    } catch (error) {
        console.error(`Failed to retrieve animals for customer id ${req.params.customerid}:`, error.message, error.stack);
        res.status(500).json({ message: 'Error retrieving animals for customer', error: error.message });
    }
});

// Create a new animal
router.post('/', async (req, res) => {
    try {
        const newAnimal = await Animal.create(req.body);
        console.log('Created a new animal', newAnimal);
        res.status(201).json(newAnimal);
    } catch (error) {
        console.error('Failed to create a new animal:', error.message, error.stack);
        res.status(400).json({ message: 'Failed to create animal', error: error.message });
    }
});

// Update an animal
router.put('/:id', async (req, res) => {
    try {
        const updated = await Animal.update(req.body, { where: { animalid: req.params.id } });
        if (updated[0] > 0) {
            console.log(`Updated animal with id ${req.params.id}`);
            res.json({ message: 'Animal updated' });
        } else {
            console.log(`Animal not found with id ${req.params.id}`);
            res.status(404).json({ message: 'Animal not found' });
        }
    } catch (error) {
        console.error(`Failed to update animal with id ${req.params.id}:`, error.message, error.stack);
        res.status(400).json({ message: 'Failed to update animal', error: error.message });
    }
});

// Delete an animal
router.delete('/:id', async (req, res) => {
    try {
        const numDeleted = await Animal.destroy({ where: { animalid: req.params.id } });
        if (numDeleted > 0) {
            console.log(`Deleted animal with id ${req.params.id}`);
            res.json({ message: 'Animal deleted' });
        } else {
            console.log(`Animal not found with id ${req.params.id}`);
            res.status(404).json({ message: 'Animal not found' });
        }
    } catch (error) {
        console.error(`Failed to delete animal with id ${req.params.id}:`, error.message, error.stack);
        res.status(500).json({ message: 'Failed to delete animal', error: error.message });
    }
});

module.exports = router;