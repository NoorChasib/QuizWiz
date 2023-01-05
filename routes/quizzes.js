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
  console.log("before", req.body);
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
      res.redirect("/user");
    })
    .catch((e) => console.error(e.stack));
});

module.exports = router;
