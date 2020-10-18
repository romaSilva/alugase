const { Sequelize } = require("sequelize");
const dbConfig = require("../config/database.ts");

const User = require("../models/Owner");

const connection = new Sequelize(dbConfig);

User.init(connection);

// const testConnection = async () => {
//   try {
//     await connection.authenticate();
//     console.log("Connection has been established successfully.");
//   } catch (error) {
//     console.error("Unable to connect to the database:", error);
//   }
// };

// testConnection();

// connection.close();

module.exports = connection;
