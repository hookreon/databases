CREATE DATABASE chat;

USE chat;

CREATE TABLE users (
  objectId INTEGER PRIMARY KEY AUTO_INCREMENT,
  username VARCHAR(30) UNIQUE
);

INSERT INTO users (username) VALUES ('roberto');

CREATE TABLE messages (
  objectId INTEGER PRIMARY KEY AUTO_INCREMENT,
  text VARCHAR(140),
  roomname VARCHAR(30),
  createdAt TIMESTAMP,
  updatedAt TIMESTAMP,
  username VARCHAR(30),
  FOREIGN KEY (username) REFERENCES users (username)
);

INSERT INTO messages (username, text, roomname)
  VALUES ('roberto', 'hola homie', 'lobby');



/* Create other tables and define schemas for them here! */




/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/



-- messagesObj.results.push({
--   createdAt: "2015-07-10T22:47:36.171Z",
--   objectId: "ZppI2VRmym",
--   roomname: "lobby",
--   text: "earlier",
--   updatedAt: "2015-07-20T22:47:36.171Z",
--   username: "doge"
-- });
