var mysql = require('mysql');

// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".

var dbConnection;

dbConnection = mysql.createConnection({
  user: 'root',
  password: '',
  database: 'chat'
});

dbConnection.connect();

// var queryString = 'SELECT * FROM messages';
// var queryArgs = [];

// dbConnection.query(queryString, queryArgs, function(err, results) {
//   // Should have one result:
//   console.log(results.length);

//   // TODO: If you don't have a column named text, change this test.
//   console.log(results);
// });

module.exports = dbConnection;


/* You'll need to
 * npm install sequelize
 * before running this example. Documentation is at http://sequelizejs.com/
 */

// var Sequelize = require('sequelize');
// var sequelize = new Sequelize('chat', 'root', '');
// /* TODO this constructor takes the database name, username, then password.
//  * Modify the arguments if you need to */

// /* first define the data structure by giving property names and datatypes
//  * See http://sequelizejs.com for other datatypes you can use besides STRING. */
// var User = sequelize.define('User', {
//   username: Sequelize.STRING
// });

// var Message = sequelize.define('Message', {
//   userid: Sequelize.INTEGER,
//   text: Sequelize.STRING,
//   roomname: Sequelize.STRING
// });

//  .sync() makes Sequelize create the database table for us if it doesn't
//  *  exist already:
// User.sync().success(function() {
//   /* This callback function is called once sync succeeds. */

//   // now instantiate an object and save it:
//   var newUser = User.build({username: 'Jean Valjean'});
//   newUser.save().success(function() {

//     /* This callback function is called once saving succeeds. */

//     // Retrieve objects from the database:
//     User.findAll({ where: {username: 'Jean Valjean'} }).success(function(usrs) {
//       // This function is called back with an array of matches.
//       for (var i = 0; i < usrs.length; i++) {
//         console.log(usrs[i].username + ' exists');
//       }
//     });
//   });
// });







// var tablename = 'messages';

// dbConnection.query('truncate ' + tablename, done);

// export.getJSON = function () {

//   // return the JSON
// }; // getJSON
