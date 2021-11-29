const { Sequelize } = require('sequelize');
const envConfig = global.config;

module.exports = new Sequelize(
  envConfig.postgres.database, 
  envConfig.postgres.username, 
  envConfig.postgres.password, 
  {
    host: envConfig.postgres.host,
    dialect: 'postgres' 
  }
);
