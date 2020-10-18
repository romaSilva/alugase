import path from "path";

module.exports = {
  client: "mssql",
  migrations: {
    directory: path.resolve(__dirname, "src", "database", "migrations"),
  },
  useNullAsDefault: true,
};
