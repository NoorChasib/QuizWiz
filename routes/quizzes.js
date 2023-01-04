/* Define routes for Quizzes here
 */

const express = require("express");
const app = express();
const router = express.Router();

router.get("/list", (req, res) => {
  res.render("quizlist");
});

router.get("/new", (req, res) => {
  res.render("quiz_form");
});

router.post("/new", (req, res) => {
  
});

module.exports = router;
