const dotenv = require("dotenv");
dotenv.config();
const jwt = require("jsonwebtoken");
const User = require("../models/user");
const Question = require("../models/questions");
const Joi = require("joi");

const findQuestion = async (query) => {
  const question = await Question.findOne({
    where: query,
  });
  return question;
};

const {
  ValidationError,
  FieldRequiredError,
  AlreadyTakenError,
  UnauthorizedError,
} = require("../middleware/helper");
const mySchema = Joi.object().keys({
  title: Joi.string().required(),
  question: Joi.string().required(),
  rating: Joi.string().required(),
});



// create question
const createQuestion = async (req, res, next) => {
  try {
    const { title, question, rating } = req.body;
    // const user_id = req.user.id
    if (!question) throw new FieldRequiredError(`Ask your question!!!`);
    if (!rating) throw new FieldRequiredError(`Please rate the question`);
    if (!title)
      throw new FieldRequiredError(`your question must have a title!!`);

    const questionExists = await Question.findOne({
      where: { question: req.body.question },
    });
    if (questionExists)
      throw new AlreadyTakenError("This question has been asked already!!");
    const questions = new Question({
      ...req.body,
      user_id:req.user.id
    });

    await questions.save();
    // const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET);

    res.status(201).json({ questions });
  } catch (e) {
    next(e);
  }
};

// get question

const getOne = async (req, res) => {
  const id = req.params.id;
  const question = await findQuestion({ id });

  if (!question) {
    res.status(404);
    throw new Error("Question does not exist");
  } else {
    res.send(question);
  }
};


// const getOne = async (req, res) => {
//   const id = req.params.id;
//   const question = await findQuestion({ id });

//   if (!question) {
//     res.status(404);
//     throw new Error(error);
//   } else {
//     res.send(question);
//   }
// };


// const getOne = async (req, res, next) => {
//   try {
//     const question = await Question.findAll({
//       where: {
//         ...req.body,
//         user_id:req.user.id
//       },
//       include: [
//         {
//           model: Question,
//           as: "question",
//           attributes: ["rating", "question"],
//         },
//       ],
//     });
//     res.json(question);
//   } catch (error) {
//     next(error);
//   }
// };



module.exports = createQuestion, getOne;
