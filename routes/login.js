const express = require("express");
const app = express();
const router = express.Router();
const pool = require("./_postgres");
const cookieSession = require("cookie-session");
//const bcrypt = require("bcrypt");

app.set("view engine", "ejs");

router.get("/login", (req, res) => {
  res.render("login");
});

app.use(
  cookieSession({
    name: "session",
    keys: ["key1", "key2"],
  })
);
app.use(express.urlencoded({ extended: true }));


// endpoint to handle POST request to /login
router.post("/login", (req, res) => {
  const submittedEmail = req.body.email; // receiving an email
  const submittedPassword = req.body.password; // receiving a password

// validate whether email field is empty
if (!submittedEmail) {
  res.status(403).send("Email cannot be blank");
} else {
  // run query in db to check for submitted email and submitted password
  let users = '';
  const text = `SELECT email, password FROM users WHERE email = $1;`
  const values = [submittedEmail];

  pool
    .query(text, values)
    .then((result) => {
//      console.log('it works')
      let users = result.rows[0]
//      console.log('result', result.rows[0])

      if (!result.rows[0]) {
        res.send('Email does not exist');
      } else if (!submittedPassword) {
        res.status(403).send("Password cannot be blank");
      } else if (submittedPassword !== result.rows[0].password) {
        res.status(403).send("Incorrect password");
      } else {
    // set cookie
    // req.session.user_id = 'abc@gmail.com';
        // redirect to /user if login successful
        return res.redirect("/user");
      }
    })
    .catch((e) => console.error(e.stack));
}
});


module.exports = router;
