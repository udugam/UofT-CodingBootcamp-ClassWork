// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================
var connection = require("../config/connection.js");


// Routes
// =============================================================
module.exports = function(app) {

  // Get all chirps
  app.get('/api/chirps', function(req,res) {
    var query = `SELECT * FROM chirps`
    connection.query(query, function(err, result) {
      if (err) throw err
      console.log(result)
      res.json(result)
    })
  })

  // Add a chirp
  app.post('/api/chirp', function(req,res) {
    var parsedReq = JSON.req.body
    connection.query(`INSERT INTO chirps SET ?`,[parsedReq.author, parsedReq.chirp,'NOW()'], function(err,result) {
      if(err) throw err
      res.json(true)
    })
  })

};
