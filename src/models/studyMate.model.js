module.exports = class StudyMate {
  constructor(
    id,
    userId,
    title,
    place,
    startAt,
    people,
    condition,
    week,
    timeStart,
    timeEnd,
    period,
    content,
    createdAt
  ) {
    this.id = id;
    this.userId = userId;
    this.title = title;
    this.place = place;
    this.startAt = startAt;
    this.people = people;
    this.condition = condition;
    this.week = week;
    this.timeStart = timeStart;
    this.timeEnd = timeEnd;
    this.period = period;
    this.content = content;
    this.createdAt = createdAt;
  }
};
