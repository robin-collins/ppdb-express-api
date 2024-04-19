const { sequelize, Sequelize } = require('../config/sequelize'); // Adjust the path as necessary
// const sequelize = require('../config/database');
const Animal = require('./Animal');

const Note = sequelize.define('Note', {
    noteid: {
        type: Sequelize.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    animalid: {
        type: Sequelize.DataTypes.INTEGER,
        references: {
            model: Animal,
            key: 'animalid'
        }
    },
    notes: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false
    },
    date: {
        type: Sequelize.DataTypes.DATE,
        allowNull: false
    }
}, {
    tableName: 'notes',
    timestamps: false
});

module.exports = Note;