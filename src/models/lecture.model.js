module.exports = class Lecture {
  constructor(
    id,
    entityVersion,
    year,
    semesterCode,
    subjectId,
    subjectNm,
    classSequence,
    sequenceNo,
    displayLangCode,
    grades,
    strGrade,
    standardDeptCode,
    assignedCollegeCode,
    assignedDepartmentCode,
    credit,
    theoryTime,
    practiceTime,
    dayTime,
    courseCode,
    categoryCode,
    foreignLanguage,
    langCode,
    type,
    tiedLectureIds,
    teamTeamDual,
    closed,
    professorNo,
    professorName,
    remark,
    full,
    basketAttendCount,
    studentTypeRule,
    retake,
    appointPriorSubject
  ) {
    this.id = id;
    this.entityVersion = entityVersion;
    this.year = year;
    this.semesterCode = semesterCode;
    this.subjectId = subjectId;
    this.subjectNm = subjectNm;
    this.classSequence = classSequence;
    this.sequenceNo = sequenceNo;
    this.displayLangCode = displayLangCode;
    this.grades = grades; // []string
    this.strGrade = strGrade;
    this.standardDeptCode = standardDeptCode;
    this.assignedCollegeCode = assignedCollegeCode;
    this.assignedDepartmentCode = assignedDepartmentCode;
    this.credit = credit; // credits
    this.theoryTime = theoryTime; // credits
    this.practiceTime = practiceTime; // credits
    this.dayTime = dayTime;
    this.courseCode = courseCode;
    this.categoryCode = categoryCode;
    this.foreignLanguage = foreignLanguage;
    this.langCode = langCode;
    this.type = type;
    // "tiedLectureIds": {
    //     "elements": ["2023200005"]
    // },
    this.tiedLectureIds = tiedLectureIds;
    this.teamTeamDual = teamTeamDual;
    this.closed = closed;
    this.professorNo = professorNo;
    this.professorName = professorName;
    this.remark = remark;
    this.full = full;
    this.basketAttendCount = basketAttendCount;
    // this.studentTypeRule = studentTypeRule; // unknown type
    // this.retake = retake; // unknown type
    this.appointPriorSubject = appointPriorSubject;
  }
};
