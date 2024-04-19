'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('animals', {
      animalid: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      animalname: {
        type: Sequelize.STRING,
        allowNull: false
      },
      breedid: {
        type: Sequelize.INTEGER,
        references: {
          model: 'breeds',
          key: 'breedid'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
      },
      customerid: {
        type: Sequelize.INTEGER,
        references: {
          model: 'customers',
          key: 'customerid'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
      },
      sex: {
        type: Sequelize.STRING,
        allowNull: false
      },
      colour: {
        type: Sequelize.STRING,
        allowNull: false
      },
      cost: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      lastvisit: {
        type: Sequelize.DATE,
        allowNull: false
      },
      thisvisit: {
        type: Sequelize.DATE,
        allowNull: false
      },
      comments: {
        type: Sequelize.TEXT
      }
    });

    console.log('Table "animals" has been created successfully.');
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('animals');
    console.log('Table "animals" has been dropped.');
  }
};