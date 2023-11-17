const EntitySchema = require("typeorm").EntitySchema;
const Material = require("../models/material.model");

module.exports = new EntitySchema({
  name: "Material",
  target: Material,
  columns: {
    id: {
      primary: true,
      type: "bigint",
      generated: true,
    },
    createdAt: {
      name: "created_at",
      type: "timestamp",
      default: () => "CURRENT_TIMESTAMP",
      nullable: false,
    },
    userId: {
      name: "user_id",
      type: "bigint",
      nullable: false,
    },
    lectureId: {
      name: "lecture_id",
      type: "varchar",
      nullable: false,
    },
    professorId: {
      name: "professor_id",
      type: "varchar",
      nullable: false,
    },
    title: {
      type: "varchar",
      nullable: false,
    },
    content: {
      type: "mediumtext",
      nullable: false,
    },
    file: {
      type: "varchar",
      nullable: true,
    },
  },
});
