var models = require('../models');
var bluebird = require('bluebird');

// var Promise = require("bluebird");
// var request = Promise.promisify(require("request"));
// var models = bluebird.promisify(require('../models'));

module.exports = {
  messages: {
    get: function (req, res) { // a function which handles a get request for all messages
      // serve the messages to client
        // read the database
        models.messages.get();
        // send the messages back to client
          // .then(function (TODO) { /* send response as JSON data */ });
    },
    post: function (req, res) { // a function which handles posting a message to the database
      // save the message to the db
    }
  },

  users: {
    // Ditto as above
    get: function (req, res) {

    },
    post: function (req, res) {

    }
  }
};
