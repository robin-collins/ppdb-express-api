'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('notes', {
      noteid: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      animalid: {
        type: Sequelize.INTEGER,
        references: {
          model: 'animals',
          key: 'animalid'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
      },
      notes: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      date: {
        type: Sequelize.DATE,
        allowNull: false
      }
    }).then(() => {
      console.log('Successfully created notes table');
    }).catch((error) => {
      console.error('Failed to create notes table:', error.message, error.stack);
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('notes').then(() => {
      console.log('Successfully dropped notes table');
    }).catch((error) => {
      console.error('Failed to drop notes table:', error.message, error.stack);
    });
  }
};