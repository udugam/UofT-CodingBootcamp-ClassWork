-- Create the database day_planner_db and specified it for use.
CREATE DATABASE moviePlannerDB;

-- Create the table plans.
CREATE TABLE moviePlannerDB.movies
(
ID int NOT NULL AUTO_INCREMENT,
MOVIE varchar(255) NOT NULL,
PRIMARY KEY (id)
);

