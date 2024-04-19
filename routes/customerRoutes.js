const express = require('express');
const router = express.Router();
const Customer = require('../models/Customer');

// Retrieve all customers
router.get('/', async (req, res) => {
    try {
        const customers = await Customer.findAll();
        console.log('Retrieved all customers');
        res.json(customers);
    } catch (error) {
        console.error('Failed to retrieve customers:', error.message, error.stack);
        res.status(500).json({ message: 'Failed to retrieve customers', error: error.message });
    }
});

// Retrieve a specific customer by id
router.get('/:id', async (req, res) => {
    try {
        const customer = await Customer.findByPk(req.params.id);
        if (customer) {
            console.log(`Retrieved customer with id ${req.params.id}`);
            res.json(customer);
        } else {
            console.log(`Customer not found with id ${req.params.id}`);
            res.status(404).json({ message: 'Customer not found' });
        }
    } catch (error) {
        console.error(`Error retrieving customer with id ${req.params.id}:`, error.message, error.stack);
        res.status(500).json({ message: 'Error retrieving customer', error: error.message });
    }
});

// Create a new customer
router.post('/', async (req, res) => {
    try {
        const newCustomer = await Customer.create(req.body);
        console.log('Created a new customer', newCustomer);
        res.status(201).json(newCustomer);
    } catch (error) {
        console.error('Failed to create a new customer:', error.message, error.stack);
        res.status(400).json({ message: 'Failed to create customer', error: error.message });
    }
});

// Update a customer
router.put('/:id', async (req, res) => {
    try {
        const updated = await Customer.update(req.body, {
            where: { customerid: req.params.id }
        });
        if (updated[0] > 0) {
            console.log(`Updated customer with id ${req.params.id}`);
            res.json({ message: 'Customer updated' });
        } else {
            console.log(`Customer not found with id ${req.params.id}`);
            res.status(404).json({ message: 'Customer not found' });
        }
    } catch (error) {
        console.error(`Failed to update customer with id ${req.params.id}:`, error.message, error.stack);
        res.status(400).json({ message: 'Failed to update customer', error: error.message });
    }
});

// Delete a customer
router.delete('/:id', async (req, res) => {
    try {
        const numDeleted = await Customer.destroy({
            where: { customerid: req.params.id }
        });
        if (numDeleted > 0) {
            console.log(`Deleted customer with id ${req.params.id}`);
            res.json({ message: 'Customer deleted' });
        } else {
            console.log(`Customer not found with id ${req.params.id}`);
            res.status(404).json({ message: 'Customer not found' });
        }
    } catch (error) {
        console.error(`Failed to delete customer with id ${req.params.id}:`, error.message, error.stack);
        res.status(500).json({ message: 'Failed to delete customer', error: error.message });
    }
});

module.exports = router;