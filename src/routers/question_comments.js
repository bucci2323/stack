const express = require("express");
const auth = require("../middleware/auth");
const passcode = require("../middleware/passcode");

const createQuestion = require("../controllers/questons")
// const  getOne = require("../controllers/questons")
const create = require("../controllers/question_comments")


const router = new express.Router();

router.post("/questioncomment", auth, create);
// router.get('/question/id', getOne);
module.exports = router;