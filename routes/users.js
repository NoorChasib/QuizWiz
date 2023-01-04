/*
 * All routes for Users are defined here
 * Since this file is loaded in server.js into /users,
 *   these routes are mounted onto /users
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  // console log to check cookie
  console.log('req.session', req.session);
  res.render("user");
});

router.get('/password')

module.exports = router;
