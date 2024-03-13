module.exports = class Material {
  constructor(
    id,
    createdAt,
    userId,
    professor,
    title,
    content,
    file,
    type,
    keyword,
    note
  ) {
    this.id = id;
    this.createdAt = createdAt;
    this.userId = userId;
    this.professor = professor;
    this.title = title;
    this.content = content;
    this.file = file;
    this.type = type;
    this.keyword = keyword;
    this.note = note;
  }
};
