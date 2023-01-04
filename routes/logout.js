const express = require("express");
const app = express();
const router = express.Router();

// endpoint to handle a POST to logout

router.post("/api/logout", (req, res) => {
  req.session = null; // clear session cookie
  res.redirect("/")
});

module.exports = router;
