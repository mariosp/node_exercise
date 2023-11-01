const { Sequelize } = require('sequelize');
const fs = require('fs');
const path = require('path');

let sequelizeInstance;

const getSequelize = () => {
  return sequelizeInstance;
}

const initDB = () =>{
    const databaseName = process.env.DB_NAME;
    const username = process.env.DB_USER;
    const password = process.env.DB_PASSWORD;
    const host = process.env.DB_HOST;
    const port = process.env.DB_PORT;

    const conString = `postgres://${username}:${password}@${host}:${port}/${databaseName}`;
    // with URI
    sequelizeInstance = new Sequelize(conString);
}

const testConnection = async () => {
    try {
      await getSequelize().authenticate()
      console.log("Connection has been established successfully.");
    } catch (error) {
      console.error("Unable to connect to the database:", error);
    }
};

const setup = () => {
  const filePath = path.resolve(__dirname,'../sql/01_CREATE_TABLES.sql');
  const sql_string = fs.readFileSync(filePath, 'utf8');
  getSequelize().query(sql_string);
}

initDB();
setup();

module.exports = { testConnection, getSequelize};