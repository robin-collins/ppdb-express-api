const { sequelize, Sequelize } = require('../config/sequelize'); // Adjust the path as necessary
// const sequelize = require('../config/database');

const Customer = sequelize.define('Customer', {
    customerid: {
        type: Sequelize.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    surname: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false
    },
    firstname: Sequelize.DataTypes.STRING,
    address: Sequelize.DataTypes.STRING,
    suburb: Sequelize.DataTypes.STRING,
    postcode: Sequelize.DataTypes.INTEGER,
    phone1: Sequelize.DataTypes.STRING,
    phone2: Sequelize.DataTypes.STRING,
    phone3: Sequelize.DataTypes.STRING,
    email: Sequelize.DataTypes.STRING
}, {
    tableName: 'customers',
    timestamps: false
});

module.exports = Customer;