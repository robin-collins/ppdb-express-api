'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('customers', {
      customerid: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      surname: {
        type: Sequelize.STRING,
        allowNull: false
      },
      firstname: {
        type: Sequelize.STRING
      },
      address: {
        type: Sequelize.STRING
      },
      suburb: {
        type: Sequelize.STRING
      },
      postcode: {
        type: Sequelize.INTEGER
      },
      phone1: {
        type: Sequelize.STRING
      },
      phone2: {
        type: Sequelize.STRING
      },
      phone3: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      }
    }).then(() => {
      console.log('Successfully created customers table');
    }).catch((error) => {
      console.error('Failed to create customers table:', error.message, error.stack);
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('customers').then(() => {
      console.log('Successfully dropped customers table');
    }).catch((error) => {
      console.error('Failed to drop customers table:', error.message, error.stack);
    });
  }
};