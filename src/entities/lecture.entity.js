const EntitySchema = require("typeorm").EntitySchema;
const Lecture = require("../models/lecture.model");

module.exports = new EntitySchema({
  name: "Lecture",
  target: Lecture,
  columns: {
    id: {
      primary: true,
      type: "varchar",
      nullable: false,
    },
    entityVersion: {
      name: "entity_version",
      type: "int",
      nullable: true,
    },
    year: {
      type: "int",
      nullable: false,
    },
    semesterCode: {
      name: "semester_code",
      type: "text",
      nullable: false,
    },
    subjectId: {
      name: "subject_id",
      type: "text",
      nullable: false,
    },
    subjectNm: {
      name: "subject_nm",
      type: "text",
      nullable: false,
    },
    classSequence: {
      name: "class_sequence",
      type: "text",
      nullable: true,
    },
    sequenceNo: {
      name: "sequence_no",
      type: "text",
      nullable: true,
    },
    displayLangCode: {
      name: "display_lang_code",
      type: "text",
      nullable: true,
    },
    grades: {
      type: "text", // ["1", "2", "3", "4"] -> "1,2,3,4"
      nullable: true,
    },
    strGrade: {
      name: "str_grade",
      type: "text",
      nullable: true,
    },
    standardDeptCode: {
      name: "standard_dept_code",
      type: "text",
      nullable: true,
    },
    assignedCollegeCode: {
      name: "assigned_college_code",
      type: "text",
      nullable: true,
    },
    assignedDepartmentCode: {
      name: "assigned_department_code",
      type: "text",
      nullable: true,
    },
    credit: {
      type: "int",
      nullable: true,
    },
    theoryTime: {
      name: "theory_time",
      type: "int",
      nullable: true,
    },
    practiceTime: {
      name: "practice_time",
      type: "int",
      nullable: true,
    },
    dayTime: {
      name: "day_time",
      type: "text",
      nullable: true,
    },
    courseCode: {
      name: "course_code",
      type: "text",
      nullable: true,
    },
    categoryCode: {
      name: "category_code",
      type: "text",
      nullable: true,
    },
    foreignLanguage: {
      name: "foreign_language",
      type: "boolean",
      nullable: true,
    },
    langCode: {
      name: "lang_code",
      type: "text",
      nullable: true,
    },
    type: {
      type: "text",
      nullable: true,
    },
    tiedLectureIds: {
      name: "tied_lecture_ids",
      type: "text", // elements ["2023200005"] -> "2023200005" (join with ",")
      nullable: true,
    },
    teamTeamDual: {
      name: "team_team_dual",
      type: "boolean",
      nullable: true,
    },
    closed: {
      type: "boolean",
      nullable: true,
    },
    professorNo: {
      name: "professor_no",
      type: "varchar",
      nullable: true, // must be true
    },
    professorName: {
      name: "professor_name",
      type: "text",
      nullable: true, // must be true
    },
    remark: {
      type: "text",
      nullable: true,
    },
    full: {
      type: "boolean",
      nullable: true,
    },
    basketAttendCount: {
      name: "basket_attend_count",
      type: "int",
      nullable: true,
    },
    retake: {
      type: "boolean",
      nullable: true,
    },
  },
  relations: {
    lectureTimes: {
      target: "LectureTime",
      type: "one-to-many",
      inverseSide: "lecture",
      joinColumn: {
        name: "id",
        referencedColumnName: "lecture_id",
      },
    },
  },
});
