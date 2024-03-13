module.exports = class Material {
  constructor(id, createdAt, userId, professor, title, content, file) {
    this.id = id;
    this.createdAt = createdAt;
    this.userId = userId;
    this.professor = professor;
    this.title = title;
    this.content = content;
    this.file = file;
  }
};
