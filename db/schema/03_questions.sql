-- Create Questions table

DROP TABLE IF EXISTS questions CASCADE;
CREATE TABLE questions (
  id SERIAL PRIMARY KEY NOT NULL,
  content TEXT NOT NULL,
  answer_id INTEGER REFERENCES answers(id) ON DELETE CASCADE
);
