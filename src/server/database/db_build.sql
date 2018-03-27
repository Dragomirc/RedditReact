BEGIN;

DROP TABLE IF EXISTS posts CASCADE;


CREATE TABLE posts (
  id SERIAL PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  votes INT,
  comments TEXT[]
);





INSERT INTO posts (title,description, votes, comments) VALUES ('React', 'Learn React', 0, '{"Very nice tutorial","When would be lesson 2"}');
INSERT INTO posts (title,description, votes, comments) VALUES ('Redux', 'Learn Redux', 0, '{"Very nice tutorial","When would be lesson 2"}');


COMMIT;
