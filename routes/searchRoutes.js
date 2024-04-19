const express = require('express');
const { Op } = require('sequelize');
const Customer = require('../models/Customer');
const Animal = require('../models/Animal');

const router = express.Router();

router.get('/', async (req, res) => {
    let { q, page = 1, limit = 10 } = req.query;
    page = parseInt(page);
    limit = parseInt(limit);
    const offset = (page - 1) * limit;

    try {
        const customers = await Customer.findAndCountAll({
            where: {
                [Op.or]: [
                    { surname: { [Op.iLike]: `%${q}%` } },
                    { phone1: { [Op.iLike]: `%${q}%` } },
                    { phone2: { [Op.iLike]: `%${q}%` } },
                    { phone3: { [Op.iLike]: `%${q}%` } },
                ]
            },
            offset,
            limit
        });

        const animals = await Animal.findAndCountAll({
            where: {
                animalname: { [Op.iLike]: `%${q}%` }
            },
            offset,
            limit
        });

        console.log("Search executed successfully for query:", q);
        res.json({
            customers: {
                rows: customers.rows,
                count: customers.count
            },
            animals: {
                rows: animals.rows,
                count: animals.count
            }
        });
    } catch (error) {
        console.error("Error during search operation:", error.message, error.stack);
        res.status(500).json({ message: "Error fetching search results", error: error.message });
    }
});

module.exports = router;