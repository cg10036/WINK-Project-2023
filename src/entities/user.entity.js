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
      nullable: false,
    },
    password: {
      type: "varchar",
      nullable: false,
    },
    name: {
      type: "varchar",
      nullable: false,
    },
    studentId: {
      name: "student_id",
      type: "varchar",
      nullable: false,
    },
  },
});
