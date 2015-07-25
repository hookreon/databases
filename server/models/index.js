var db = require('../db');

module.exports = {
  messages: {
    get: function () { // a function which produces all the messages
      console.log('were in the models now!');

      console.log(db);

      var queryString = 'SELECT * FROM messages';
      var queryArgs = [];

      db.query(queryString, queryArgs, function(err, results) {
        // Should have one result:
        console.log(results.length);

        // TODO: If you don't have a column named text, change this test.
        console.log(results);
      });


      // var data = db.getJSON(); ??

      // query the database for the correct data
      // send it back to the controller/index.js
    },
    post: function () { // a function which can be used to insert a message into the database

    }
  },

  users: {
    // Ditto as above.
    get: function () {},
    post: function () {}
  }
};
