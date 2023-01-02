const express = require("express");
//const cookieSession = require("cookie-session");
const bcrypt = require("bcryptjs");

const app = express();

app.use;

app.post("/register", (req, res) => {
  let id = "";
  id += generateRandomString();
  req.session.user_id = id;

  const email = req.body.email;
  const password = req.body.password;
  const hashedPassword = bcrypt.hashSync(password);
  const foundEmail = emailFind(email, users);

  if (email === "" || password === "") {
    res.sendStatus(400);
  }
  if (foundEmail === email) {
    res.sendStatus(400);
  }

  users[id] = { id, email, hashedPassword };
  res.redirect("/urls");
});
