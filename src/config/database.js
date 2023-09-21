const { Sequelize } = require('sequelize');
require ("dotenv").config();

const sequelize = new Sequelize('postgres://zccvyjsd:${process.env.SEQUELIZE_PASSWORD}@silly.db.elephantsql.com/zccvyjsd');

const connectDB = async () => {
try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}
module.exports = {connectDB, sq: sequelize} ;





