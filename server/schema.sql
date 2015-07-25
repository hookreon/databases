CREATE DATABASE chat;

USE chat;

CREATE TABLE users (
  username VARCHAR(30) PRIMARY KEY
);

CREATE TABLE messages (
  objectId INTEGER PRIMARY KEY AUTO_INCREMENT,
  username VARCHAR(30),
  text VARCHAR(140),
  roomname VARCHAR(30),
  createdAt TIMESTAMP,
  updatedAt TIMESTAMP,
  FOREIGN KEY (username) REFERENCES users (username)
);



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
