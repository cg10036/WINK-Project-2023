const EntitySchema = require("typeorm").EntitySchema;
const Professor = require("../models/professor.model");

module.exports = new EntitySchema({
  name: "Professor",
  target: Professor,
  columns: {
    id: {
      primary: true,
      type: "varchar",
      nullable: false,
    },
    name: {
      type: "varchar",
      nullable: false,
    },
  },
});
