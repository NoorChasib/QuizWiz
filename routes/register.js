const express = require("express");
const app = express();
const router = express.Router();

//const cookieSession = require("cookie-session");
// const bcrypt = require("bcryptjs");

app.set("view engine", "ejs");

router.get("/quizapp/login/new", (req, res) => {
  res.render("register");
});

// app.post("/register", (req, res) => {
//   let id = "";
//   id += generateRandomString();
//   req.session.user_id = id;

//   const email = req.body.email;
//   const password = req.body.password;
//   const hashedPassword = bcrypt.hashSync(password);
//   const foundEmail = emailFind(email, users);

//   if (email === "" || password === "") {
//     res.sendStatus(400);
//   }
//   if (foundEmail === email) {
//     res.sendStatus(400);
//   }

//   users[id] = { id, email, hashedPassword };
//   res.redirect("/urls");
// });

module.exports = router;
