const express = require("express");
const auth = require("../middleware/auth");
const passcode = require("../middleware/passcode");
const createAnswer = require("../controllers/answers")
// const createQuestion = require("../controllers/questons")
// const  getOne = require("../controllers/questons")

const router = new express.Router();

router.post("/answer", auth, createAnswer);
// router.get('/question/id', auth, getOne);

module.exports = router;
