const EntitySchema = require("typeorm").EntitySchema;
const StudyMate = require("../models/studyMate.model");

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
    startAt: {
      name: "start_at",
      type: "text",
      nullable: false,
    },

    people: {
      type: "text",
      nullable: false,
    },

    condition: {
      type: "text",
      nullable: false,
    },

    week: {
      type: "text",
      nullable: false,
    },

    timeStart: {
      name: "time_start",
      type: "text",
      nullable: false,
    },

    timeEnd: {
      name: "time_end",
      type: "text",
      nullable: false,
    },

    period: {
      type: "int",
      nullable: false,
    },
    content: {
      type: "text",
      nullable: false,
    },
    place: {
      type: "text",
      nullable: false,
    },
  },
});
