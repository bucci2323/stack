const express = require("express");
const auth = require("../middleware/auth");
const passcode = require("../middleware/passcode");

const createQuestion = require("../controllers/questons")
const  getOne = require("../controllers/questons")
// const {
//   signUp,
//   signIn,
//   updateUser,
//   getUser,
//   deleteUser,
// } = require("../controllers/user");
const router = new express.Router();

router.post("/question", auth, createQuestion);
router.get('/question/id', getOne);

// router.post("/users/login", signIn);

// router.get("/users/me", auth, getUser);

// router.patch("/users/me", auth, passcode, updateUser);

// router.delete("/users/me", auth, passcode, deleteUser);

module.exports = router;
