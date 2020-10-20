const { Sequelize } = require("sequelize");
const dbConfig = require("../config/database.js");

const Owner = require("../models/Owner");
const Realty = require("../models/Realty");

const connection = new Sequelize(dbConfig);

Owner.init(connection);
Realty.init(connection);

Owner.associate(connection.models);
Realty.associate(connection.models);

const testConnection = async () => {
  try {
    await connection.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

testConnection();

// connection.close();

module.exports = connection;
