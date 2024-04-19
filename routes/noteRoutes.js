const express = require('express');
const router = express.Router();
const Note = require('../models/Note');
const Animal = require('../models/Animal');
const errorHandler = require('../utilities/errorHandler'); // Centralized error handling
const logger = require('../utilities/logger'); // Centralized logging

// Retrieve all notes
router.get('/', async (req, res) => {
    try {
        const notes = await Note.findAll();
        logger.log('Retrieved all notes');
        res.json(notes);
    } catch (error) {
        logger.error('Failed to retrieve notes:', error.message, error.stack);
        errorHandler(error, req, res);
    }
});

// Retrieve a specific note by id
router.get('/:id', async (req, res) => {
    try {
        const note = await Note.findByPk(req.params.id);
        if(note) {
            logger.log(`Retrieved note with id ${req.params.id}`);
            res.json(note);
        } else {
            logger.log(`Note not found with id ${req.params.id}`);
            res.status(404).json({ message: 'Note not found' });
        }
    } catch (error) {
        logger.error(`Error retrieving note with id ${req.params.id}:`, error.message, error.stack);
        errorHandler(error, req, res);
    }
});

// Retrieve all notes for a specific animal
router.get('/animal/:animalid', async (req, res) => {
    try {
        const notes = await Note.findAll({
            where: { animalid: req.params.animalid }
        });
        logger.log(`Retrieved all notes for animal id ${req.params.animalid}`);
        res.json(notes);
    } catch (error) {
        logger.error(`Failed to retrieve notes for animal id ${req.params.animalid}:`, error.message, error.stack);
        errorHandler(error, req, res);
    }
});

// Create a new note
router.post('/', async (req, res) => {
    try {
        const newNote = await Note.create(req.body);
        logger.log('Created a new note', newNote);
        res.status(201).json(newNote);
    } catch (error) {
        logger.error('Failed to create a new note:', error.message, error.stack);
        errorHandler(error, req, res);
    }
});

// Update a note
router.put('/:id', async (req, res) => {
    try {
        const updated = await Note.update(req.body, { where: { noteid: req.params.id } });
        if (updated[0] > 0) {
            logger.log(`Updated note with id ${req.params.id}`);
            res.json({ message: 'Note updated' });
        } else {
            logger.log(`Note not found with id ${req.params.id}`);
            res.status(404).json({ message: 'Note not found' });
        }
    } catch (error) {
        logger.error(`Failed to update note with id ${req.params.id}:`, error.message, error.stack);
        errorHandler(error, req, res);
    }
});

// Delete a note
router.delete('/:id', async (req, res) => {
    try {
        const numDeleted = await Note.destroy({ where: { noteid: req.params.id } });
        if (numDeleted > 0) {
            logger.log(`Deleted note with id ${req.params.id}`);
            res.json({ message: 'Note deleted' });
        } else {
            logger.log(`Note not found with id ${req.params.id}`);
            res.status(404).json({ message: 'Note not found' });
        }
    } catch (error) {
        logger.error(`Failed to delete note with id ${req.params.id}:`, error.message, error.stack);
        errorHandler(error, req, res);
    }
});

module.exports = router;