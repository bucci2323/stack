const express = require("express");
const auth = require("../middleware/auth");
const passcode = require("../middleware/passcode");

const createAnswer = require("../controllers/answers")
// const  getOne = require("../controllers/questons")
const create = require("../controllers/answer_comments")


const router = new express.Router();

router.post("answercomment", auth, create);
// router.get('/question/id', getOne);
module.exports = router;