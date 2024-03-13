module.exports = class Material {
  constructor(id, createdAt, userId, title, content, file) {
    this.id = id;
    this.createdAt = createdAt;
    this.userId = userId;
    this.title = title;
    this.content = content;
    this.file = file;
  }
};
