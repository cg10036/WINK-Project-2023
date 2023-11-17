module.exports = class Material {
  constructor(
    id,
    createdAt,
    userId,
    lectureId,
    professorId,
    title,
    content,
    file
  ) {
    this.id = id;
    this.createdAt = createdAt;
    this.userId = userId;
    this.lectureId = lectureId;
    this.professorId = professorId;
    this.title = title;
    this.content = content;
    this.file = file;
  }
};
