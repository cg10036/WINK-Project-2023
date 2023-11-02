const EntitySchema = require("typeorm").EntitySchema;
const User = require("../models/user.model");

module.exports = new EntitySchema({
  name: "User",
  target: User,
  columns: {
    id: {
      primary: true,
      type: "bigint",
      generated: true,
    },
    username: {
      unique: true,
      type: "varchar",
    },
    password: {
      type: "varchar",
    },
  },
});
