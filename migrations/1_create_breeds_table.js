'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    try {
      await queryInterface.createTable('breeds', {
        breedid: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        breedname: {
          type: Sequelize.STRING,
          allowNull: false,
          unique: true
        },
        avgtime: {
          type: Sequelize.TIME
        },
        avgcost: {
          type: Sequelize.INTEGER
        }
      });
      console.log('Successfully created breeds table');
    } catch (error) {
      console.error('Failed to create breeds table:', error.message, error.stack);
    }
  },
  down: async (queryInterface, Sequelize) => {
    try {
      await queryInterface.dropTable('breeds');
      console.log('Successfully dropped breeds table');
    } catch (error) {
      console.error('Failed to drop breeds table:', error.message, error.stack);
    }
  }
};