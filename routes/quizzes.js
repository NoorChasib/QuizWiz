/* Define routes for Quizzes here
 */

const express = require("express");
const app = express();
const router = express.Router();
const pool = require("./_postgres");

router.get("/list", (req, res) => {
  res.render("quizlist");
});

router.get("/new", (req, res) => {
  res.render("quiz_form");
});

router.post("/new", (req, res) => {
  //give quiz an id
  //add question id to each question and push content to question table
  //add answer id to each answer and push content to answers table
  //reference questions and answers id to question_answers table
  //reference question answers id to quiz table
});

module.exports = router;
