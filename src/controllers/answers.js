const dotenv = require("dotenv");
dotenv.config();
const jwt = require("jsonwebtoken");
const User = require("../models/user");
const Question = require("../models/questions");
const Joi = require("joi");
const Answers = require("../models/answer")

const {
    ValidationError,
    FieldRequiredError,
    AlreadyTakenError,
    UnauthorizedError,
  } = require("../middleware/helper");
  const mySchema = Joi.object().keys({
    answer: Joi.string().required(),
    votes: Joi.string().required(),
  });

  const createAnswer = async (req, res, next) => {
    try {
      // const { answer, votes, question_id } = req.body;
      // const question_id = req.params.question_id;
      const { answer, votes, question_id, user_id } = req.body;
      if (!answer) throw new FieldRequiredError(`please answer`);
      if (!votes) throw new FieldRequiredError(`Please rate the the answer`);

      const question = await Question.findOne({
        where: {id: question_id}
      });

      console.log(question.user_id)
      console.log(req.user.id)

      if(question.user_id === req.user.id){
        return res.status(500).json({"message": "You cannot answer your own question"})
      }

      const answerExists = await Answers.findOne({
        where: { answer: answer, question_id: question_id  },
      });
      
      if (answerExists)
        throw new AlreadyTakenError("Someone has answered this question already");

      const answers = new Answers({
        ...req.body,
        user_id:req.user.id
      });
  
      await answers.save();
      // const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET);
  
      res.status(201).json({ answers });
    } catch (e) {
      next(e);
    }
  };

  module.exports = createAnswer