const { DataSource } = require("typeorm");
const config = require("./config");

module.exports = new DataSource({
  type: "mysql",
  synchronize: true,
  logging: true,
  entities: ["src/entities/*.js"],
  migrations: [],
  subscribers: [],
  ...config.db,
});
