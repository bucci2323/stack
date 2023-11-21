const dotenv = require("dotenv");
dotenv.config();
const jwt = require("jsonwebtoken");
const User = require("../models/user");
const Question = require("../models/questions");
const QuestionComment = require("../models/question_comments")
// const answerComment = require("../models/answer_comments")
const Joi = require("joi");

const findQuestionComment = async (query) => {
  const comment = await QuestionComment.findOne({
    where: query
  });
  return comment;
};

const {
  ValidationError,
  FieldRequiredError,
  AlreadyTakenError,
  UnauthorizedError,
} = require("../middleware/helper");
const answerComment = require("../models/answer_comments");
// const mySchema = Joi.object().keys({
//   title: Joi.string().required(),
//   question: Joi.string().required(),
//   rating: Joi.string().required(),
// });

const create = async (req, res) => {
  const { comment, question_id }  = req.body;

  if(!comment) {
    return res.status(500).json({message: "Please pass a comment message"});
  }

  qC = new answerComment({
    question_id: question_id,
    user_id: req.user.id,
    comments: comment
  })

  await qC.save();

  return res.status(200).json({message: "Comment successfully added!!!"})
};

module.exports = create