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
    professor: {
      name: "professor",
      type: "text",
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
      type: "longtext",
      nullable: true,
    },
    type: {
      type: "text",
      nullable: false,
    },
    keyword: {
      type: "text",
      nullable: true,
    },
    note: {
      type: "text",
      nullable: true,
    },
  },
});
