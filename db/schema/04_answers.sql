-- Create Answers table

DROP TABLE IF EXISTS answers CASCADE;
CREATE TABLE answers (
  id SERIAL PRIMARY KEY NOT NULL,
  content TEXT NOT NULL,
  correct BOOLEAN DEFAULT FALSE
);
