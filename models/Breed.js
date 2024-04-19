const { sequelize, Sequelize } = require('../config/sequelize'); // Adjust the path as necessary
// const sequelize = require('../config/database');

const Breed = sequelize.define('Breed', {
    breedid: {
        type: Sequelize.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    breedname: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    avgtime: Sequelize.DataTypes.TIME,
    avgcost: Sequelize.DataTypes.INTEGER
}, {
    tableName: 'breeds',
    timestamps: false
});

module.exports = Breed;