const studyMateService = require("../services/studyMate.service");
const { makeValidator } = require("../helpers/request.helper");

const offerValidator = makeValidator({
  title: ["string"], //varchar
  place: ["string"], //text
  startAt: ["string"], //datetime
  people: ["string"], //text
  condition: ["string"], //text
  week: ["number"], //tinyint
  timeStart: ["string"], //time
  timeEnd: ["string"], //time
  period: ["number"], //int
  content: ["string"], //text
});

const offer = async (req, res, next) => {
  let {
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
  } = offerValidator(req.body);
  next(
    await studyMateService.offer(
      req.user.id,
      title,
      place,
      startAt,
      people,
      condition,
      week,
      timeStart,
      timeEnd,
      period,
      content
    )
  );
};

const posts = async (req, res, next) => {
  const page = req.query.page || 1; // 현재 페이지 번호 (기본값 : 1)
  const limit = 10; // 페이지당 글 개수
  const offset = limit * (page - 1);
  const focus = req.query.state === "오래된순" ? "ASC" : "DESC"; //정렬 순서
  const search = req.query.search;

  next(await studyMateService.posts(limit, offset, focus, search));
};

const detail = async (req, res, next) => {
  const id = req.query.id;
  next(await studyMateService.detail(id));
};

module.exports = {
  offer,
  posts,
  detail,
};
