const studyMateService = require("../services/studyMate.service");
const { makeValidator } = require("../helpers/request.helper");

const offerValidator = makeValidator({
  userId: ["string"], //bigint
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
    createdAt,
  } = offerValidator(req.body);
  next(
    await studyMateService.offer(
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
    )
  );
};

const posts = async (req, res, next) => {
  const page = req.query.page || 1; // 현재 페이지 번호 (기본값 : 1)
  const limit = 10; // 페이지당 글 개수
  const offset = limit * (page - 1);
  const state = req.query.state || "최신순"; // 정렬 순서 결정

  let focus = "";
  if (state === "최신순") {
    focus = "DESC";
  } else {
    focus = "ASC";
  }

  next(await studyMateService.posts(limit, offset, focus));
};

module.exports = {
  offer,
  posts,
};
