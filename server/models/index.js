var db = require('../db');

module.exports = {
  messages: {
    get: function (callback) { // a function which produces all the messages
      var queryString = 'SELECT * FROM messages';
      var queryArgs = [];

      db.query(queryString, queryArgs, callback);
    }, // get
    post: function (messageObj, callback) { // a function which can be used to insert a message into the database
      var queryString,
          queryArgs;

      // INSERT INTO users (username) VALUES ('roberto');
      queryString = 'INSERT INTO messages (text, username, roomname) VALUES (?, ?, ?)';
      queryArgs = [messageObj.text, messageObj.username, messageObj.roomname];
      db.query(queryString, queryArgs, callback);

      // INSERT INTO messages (username, text, roomname)
      //   VALUES ('roberto', 'hola homie', 'lobby');
      queryString = 'INSERT INTO messages (username, text, roomname) VALUES (?, ?, ?);';
      queryArgs = [messageObj.username, messageObj.text, messageObj.roomname];
      db.query(queryString, queryArgs, callback);
    }, // post
  }, // messages

  users: {
    // Ditto as above.
    get: function () {

    },
    post: function () {
      // var queryString,
      //     queryArgs;

      // // INSERT INTO users (username) VALUES ('roberto');
      // queryString = '\
      //   INSERT INTO user (username)\
      //   SELECT ?, user.username\
      //   FROM user\
      //   WHERE user.username = ?';
      // queryArgs = [messageObj.username];
      // db.query(queryString, queryArgs, callback);
    }
  }
};
