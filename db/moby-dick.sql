DROP DATABASE IF EXISTS moby_d;

CREATE DATABASE moby_d;

USE moby_d;


CREATE TABLE stop_words ( 

word VARCHAR(100) NULL,
PRIMARY KEY (word)

);



CREATE TABLE manuscript ( 

book TEXT()

);