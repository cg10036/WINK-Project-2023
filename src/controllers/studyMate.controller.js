const studyMateService = require("../services/studyMate.service");
const { makeValidator } = require("../helpers/request.helper");

const offerValidator = makeValidator({
  userId: ["string"], //bigint
  title: ["string"], //varchar
  place: ["string"], //text
  startAt: ["string"], //datetime
  people: ["string"], //int
  condition: ["string"], //text
  week: ["string"], //tinyint
  timeStart: ["string"], //time
  timeEnd: ["string"], //time
  period: ["string"], //int
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

module.exports = {
  offer,
};
