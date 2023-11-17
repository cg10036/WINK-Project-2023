const EntitySchema = require("typeorm").EntitySchema;
const StudyMate = require("../models/studyMate.models");

module.exports = new EntitySchema({
  name: "StudyMate",
  target: StudyMate,
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
    title: {
      type: "varchar",
      nullable: false,
    },
    content: {
      type: "mediumtext",
      nullable: false,
    },
    place: {
      type: "varchar",
      nullable: false,
    },
  },
});
