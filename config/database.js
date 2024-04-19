const { Sequelize } = require('sequelize');
require('dotenv').config();

module.exports = {
  development: {
    username: process.env.dbUser,
    password: process.env.dbPass,
    database: process.env.dbName,
    host: process.env.dbHost,
    port: process.env.dbPort,
    dialect: 'postgres',
    logging: false,
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  },
  test: {
    // Similar configuration for test environment
  },
  production: {
    // Similar configuration for production environment
  }
};