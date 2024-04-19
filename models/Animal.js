const { sequelize, Sequelize } = require('../config/sequelize'); // Adjust the path as necessary
// const sequelize = require('../config/database');
const Customer = require('./Customer');
const Breed = require('./Breed');

const Animal = sequelize.define('Animal', {
    animalid: {
        type: Sequelize.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    animalname: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false
    },
    breedid: {
        type: Sequelize.DataTypes.INTEGER,
        references: {
            model: Breed,
            key: 'breedid'
        }
    },
    customerid: {
        type: Sequelize.DataTypes.INTEGER,
        references: {
            model: Customer,
            key: 'customerid'
        }
    },
    sex: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false
    },
    colour: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false
    },
    cost: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false
    },
    lastvisit: {
        type: Sequelize.DataTypes.DATE,
        allowNull: false
    },
    thisvisit: {
        type: Sequelize.DataTypes.DATE,
        allowNull: false
    },
    comments: Sequelize.DataTypes.STRING
}, {
    tableName: 'animals',
    timestamps: false
});

Animal.belongsTo(Customer, { foreignKey: 'customerid' });
Animal.belongsTo(Breed, { foreignKey: 'breedid' });

module.exports = Animal;