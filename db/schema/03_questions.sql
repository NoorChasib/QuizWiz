-- Create Questions table

DROP TABLE IF EXISTS questions CASCADE;
CREATE TABLE questions (
  id SERIAL PRIMARY KEY NOT NULL,
  content TEXT NOT NULL,
  answercontent1 TEXT NOT NULL,
  answercontent2 TEXT NOT NULL,
  answercontent3 TEXT NOT NULL,
  answercontent4 TEXT NOT NULL,
  correctanswer TEXT NOT NULL
);
