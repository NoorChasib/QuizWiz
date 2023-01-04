/* Define routes for Quizzes here
 */

const express = require("express");
const app = express();
const router = express.Router();

module.exports = router;

router.get("/list", (req, res) => {
  res.render("quizlist");
});

router.get("/new", (req, res) => {
  res.render("quiz_form");
});

module.exports = router;
// // Display a form to Create a New Quiz
// app.get('/account/:id/new', (req, res) => {
//   const templateVars = {
//     quizzes: quizDatabase,
//     user: usersDatabase[req.session.user_id]
//   };
//   // If not logged in, redirect to GET /login
//   if (!usersDatabase[req.session.user_id]) {
//     return res.redirect('/login');
//   }
//   return res.render('quizzes_new', templateVars);
// });

// // Takes data submitted into new quiz form and creates a new quiz
// app.post('/quizzes', (req, res) => {
//   const newQuestion = req.body.question;
//   const newAnswerOne = req.body.answerOne;
//   const newAnswerTwo = req.body.answerTwo;
//   const newAnswerThree = req.body.answerThree;
//   const newAnswerFour = req.body.answerFour;

//   if(!usersDatabase[req.session.user_id]) {
//     return res.send('Please log in to create new quiz');
//   };

//   const newQuiz = {
//     newQuestion,
//     newAnswerOne,
//     newAnswerTwo,
//     newAnswerThree,
//     newAnswerFour
//   };

//   quizDatabase[newQuiz] = {
//     question: req.body.question,
//     answerOne: ,
//     answerTwo: ,
//     answerThree: ,
//     answerFour: ,
//     correctAnswerID: ,
//     userID: req.session.user_id
//   };

//   return res.redirect(`/quizzes/${newQuiz}`);
// });

// // PUT route to edit a quiz
// app.put('/quizzes/:id/edit', (req, res) => {

// });

// // DELETE route to remove a quiz
// app.delete('/quizzes/:id/delete', (req, res) => {

// });
