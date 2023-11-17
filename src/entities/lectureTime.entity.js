const EntitySchema = require("typeorm").EntitySchema;
const LectureTime = require("../models/lectureTime.model");

module.exports = new EntitySchema({
  name: "LectureTime",
  target: LectureTime,
  columns: {
    id: {
      primary: true,
      type: "bigint",
      generated: true,
    },
    lectureId: {
      name: "lecture_id",
      type: "varchar",
      nullable: false,
    },
    dayOfWeek: {
      name: "day_of_week",
      type: "int",
      nullable: true,
    },
    startHour: {
      name: "start_hour",
      type: "int",
      nullable: true,
    },
    startMinute: {
      name: "start_minute",
      type: "int",
      nullable: true,
    },
    endHour: {
      name: "end_hour",
      type: "int",
      nullable: true,
    },
    endMinute: {
      name: "end_minute",
      type: "int",
      nullable: true,
    },
    minutes: {
      type: "int",
      nullable: true,
    },
    zoneId: {
      name: "zone_id",
      type: "text",
      nullable: true,
    },
    startDate: {
      name: "start_date",
      type: "text",
      nullable: true,
    },
    endDate: {
      name: "end_date",
      type: "text",
      nullable: true,
    },
    valid: {
      type: "boolean",
      nullable: true,
    },
    instructorId: {
      name: "instructor_id",
      type: "text",
      nullable: true,
    },
    classRoomCode: {
      name: "class_room_code",
      type: "text",
      nullable: true,
    },
    classRoomName: {
      name: "class_room_name",
      type: "text",
      nullable: true,
    },
  },
});
