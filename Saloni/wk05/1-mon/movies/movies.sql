DROP TABLE IF EXISTS movies;

CREATE TABLE movies (
  id serial PRIMARY KEY,
  title varchar(50) NOT NULL,
  release_date varchar NOT NULL,
  summary varchar,
  poster varchar
);
