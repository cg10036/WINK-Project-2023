module.exports = class StudyMate {
  constructor(id, createdAt, userId, title, content, place) {
    this.id = id;
    this.createdAt = createdAt;
    this.userId = userId;
    this.title = title;
    this.content = content;
    this.place = place;
  }
};
