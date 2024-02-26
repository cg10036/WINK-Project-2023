const { HttpResponse } = require("../helpers/response.helper");
const StudyMate = require("../models/studyMate.model");
const StudyMateRepository = require("../repositories/studyMate.repository");

const offer = async (
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
  content
) => {
  let studymate = new StudyMate();
  studymate.userId = userId;
  studymate.title = title;
  studymate.place = place;
  studymate.startAt = startAt;
  studymate.people = people;
  studymate.condition = condition;
  studymate.week = week;
  studymate.timeStart = timeStart;
  studymate.timeEnd = timeEnd;
  studymate.period = period;
  studymate.content = content;

  try {
    await StudyMateRepository.save(studymate);
  } catch (err) {
    if (err.code === "ER_DUP_ENTRY") {
      return new HttpResponse(400, "STUDYOFFER_ALREADY_EXISTS");
    }
    throw err;
  }
  return new HttpResponse(201, "OFFER_SUCCESS");
};

const posts = async (limit, offset, focus) => {
  try {
    return new HttpResponse(
      200,

      await StudyMateRepository.createQueryBuilder("StudyMate")

        .limit(limit)
        .offset(offset)
        .orderBy("created_at", focus)
        .getMany()
    );
  } catch (err) {
    throw err;
  }
};

const detail = async (id) => {
  try {
    return new HttpResponse(
      200,
      await StudyMateRepository.findOne({
        where: {
          id,
        },
      })
    );
  } catch (err) {
    throw err;
  }
};

module.exports = {
  offer,
  posts,
  detail,
};
