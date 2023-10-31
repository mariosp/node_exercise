const { Sequelize } = require('sequelize');


let sequelizeInstance;

const getSequelize = () => {
  return this.sequelizeInstance;
}

const initDB = () =>{
    const databaseName = process.env.DB_NAME;
    const username = process.env.DB_USER;
    const password = process.env.DB_PASSWORD;
    const host = process.env.DB_HOST;
    const port = process.env.DB_PORT;

    const conString = `postgres://${username}:${password}@${host}:${port}/${databaseName}`;
    // with URI
    this.sequelizeInstance = new Sequelize(conString);
}

const testConnection = async () => {
    try {
      await getSequelize().authenticate()
      console.log("Connection has been established successfully.");
    } catch (error) {
      console.error("Unable to connect to the database:", error);
    }
  };

  module.exports = {initDB, testConnection, getSequelize};