var models = require('../models');
var bluebird = require('bluebird');

// var Promise =  bluebird;
// var request = Promise.promisify(require("request"));
// var models = bluebird.promisify(require('../models'));

module.exports = {
  messages: {
    get: function (req, res) { // a function which handles a get request for all messages
      // serve the messages to client
        // read the database
        models.messages.get(function (err, data) {
          var data = { results: data };
          res.json(data);
        });

        // send the messages back to client
          // .then(function (TODO) { /* send response as JSON data */ });
    }, // get
    post: function (req, res) { // a function which handles posting a message to the database
      // TODO: get the message from the client

      console.log(req.body);

      models.messages.post(req.body, function (err, data) {
        if (err) {
          console.error('ERROR SON', err);
        }
        console.log(data);
        res.end();
      });
    }, // post
  }, // messages

  users: {
    // Ditto as above
    get: function (req, res) {

    },
    post: function (req, res) {

    }
  } // users
};
