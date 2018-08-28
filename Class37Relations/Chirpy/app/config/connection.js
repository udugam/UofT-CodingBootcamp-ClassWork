// *********************************************************************************
// CONNECTION.JS - THIS FILE INITIATES THE CONNECTION TO MYSQL
// *********************************************************************************

// Require mysql
// var mysql = require("mysql");
var Sequelize = require("sequelize")

// Set up our connection information
// var connection = mysql.createConnection({
//   host: "localhost",
//   port: 3306,
//   user: "root",
//   password: "password",
//   database: "chirpy"
// });
const sequelize = new Sequelize('chirpy', 'root', 'password', {
  host: 'localhost',
  dialect: 'mysql',

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
  // http://docs.sequelizejs.com/manual/tutorial/querying.html#operators
  operatorsAliases: false
});

// Export connection
module.exports = sequelize;
