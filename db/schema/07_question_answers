-- Create Question_Answers table

DROP TABLE IF EXISTS question_answers CASCADE;
CREATE TABLE question_answers (
  id SERIAL PRIMARY KEY NOT NULL,
  question_id INTEGER REFERENCES questions(id) ON DELETE CASCADE,
  answer_id INTEGER REFERENCES answers(id) ON DELETE CASCADE,
  correct_answer_id INTEGER REFERENCES answers(id) ON DELETE CASCADE,
  quizzes_id INTEGER REFERENCES quizzes(id) ON DELETE CASCADE
);
