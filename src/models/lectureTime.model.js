module.exports = class LectureTime {
  constructor(
    id,
    lectureId,
    dayOfWeek,
    startHour,
    startMinute,
    endHour,
    endMinute,
    minutes,
    zoneId,
    startDate,
    endDate,
    valid,
    instructorId,
    classRoomCode,
    classRoomName
  ) {
    this.id = id;
    this.lectureId = lectureId;
    this.dayOfWeek = dayOfWeek;
    this.startHour = startHour;
    this.startMinute = startMinute;
    this.endHour = endHour;
    this.endMinute = endMinute;
    this.minutes = minutes;
    this.zoneId = zoneId;
    this.startDate = startDate;
    this.endDate = endDate;
    this.valid = valid;
    this.instructorId = instructorId;
    this.classRoomCode = classRoomCode;
    this.classRoomName = classRoomName;
  }
};
