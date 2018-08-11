DROP SCHEMA top_songsDB;

CREATE DATABASE top_songsDB;

CREATE TABLE top_songsDB.Top5000 (
ID INT(255),
Artist VARCHAR(50),
Song_Name  VARCHAR(50),
Release_Year INT(4),
Popularity FLOAT(3,3),
Popularity_USA FLOAT(3,3), 
Popularity_UK FLOAT(3,3), 
Popularity_EUROPE FLOAT(3,3), 
Popularity_OTHER FLOAT(3,3)
);




