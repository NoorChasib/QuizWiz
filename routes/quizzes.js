/* Define routes for Quizzes here
 */
const express = require("express");
const router = express.Router();
const pool = require("./_postgres");
const { generateRandomString } = require("./_helpers");

router.get("/list", (req, res) => {
  res.render("quizlist");
});

router.get("/new", (req, res) => {
  res.render("quiz_form");
});

router.post("/new", (req, res) => {
  // console.log("questions", req.body.questions);
  // console.log("questions", req.body.questions[0].answers[0]);
  req.body.url = generateRandomString();
  const text = `INSERT INTO quizzes (title, description, url, is_private) VALUES($1, $2, $3, $4) RETURNING *`;

  const values = [
    req.body.quiz_title,
    req.body.quiz_description,
    req.body.url,
    req.body.quiz_private,
  ];

  pool
    .query(text, values)
    .then((result) => {
      const quiz_id = result.rows[0].id;
      console.log("quiz_id", quiz_id);
      console.log("questions", req.body.questions);
      let questionValue = [
        req.body.questions[0].text,
        req.body.quiz_id,
        req.body.questions[0].answers[0],
        req.body.questions[0].answers[1],
        req.body.questions[0].answers[2],
        req.body.questions[0].answers[3],
        req.body.questions[0].correct,
        req.body.questions[1].text,
        req.body.quiz_id,
        req.body.questions[1].answers[0],
        req.body.questions[1].answers[1],
        req.body.questions[1].answers[2],
        req.body.questions[1].answers[3],
        req.body.questions[1].correct,
      ];
      let questionText = `INSERT INTO questions (content, quiz_id, answerContent1, answerContent2, answerContent3, answerContent4, correctAnswer) VALUES `;
      let questionValues = 1;
      for (let question of req.body.questions) {
        questionText += `(`;
        for (let i = 1; i < 8; i++) {
          questionText += "$" + questionValues;
          if (i < 7) {
            questionText += ",";
          }
          questionValues++;
        }
        questionText += `),`;
      }
      questionText = questionText.slice(0, -1);
      pool
        .query(questionText, questionValue)
        .then((result) => res.redirect("/user"))
        .catch((e) => console.error(e.stack));
    })
    .catch((e) => console.error(e.stack));
});

module.exports = router;
