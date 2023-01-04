const express = require("express");
const app = express();
const router = express.Router();
const pool = require("./_postgres");
const cookieSession = require("cookie-session");
const bcrypt = require("bcrypt");
const { generateRandomString } = require("./_helpers");

app.set("view engine", "ejs");

router.get("/quizapp/login/new", (req, res) => {
  res.render("register");
});

app.use(express.urlencoded({ extended: true }));

router.post("/register", (req, res) => {
  const userName = req.body.userName;
  const email = req.body.email;
  const password = req.body.password;
  const hashedPassword = bcrypt.hashSync(password, 10);
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const cookie = generateRandomString();

  const text = `INSERT INTO users(first_name, last_name, username, email, password, user_cookie) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *`;

  const values = [firstName, lastName, userName, email, hashedPassword, cookie];

  pool
    .query(text, values)
    .then((result) => {
      req.session.users_id = cookie;
      res.redirect("/user");
    })
    .catch((e) => console.error(e.stack));
});

module.exports = router;
