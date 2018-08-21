var express = require('express')
var mysql = require('mysql')

//Setup mySQL connection
var connection = mysql.createConnection({
    host: "localhost",
  
    // Your port; if not 3306
    port: 3306,
  
    // Your username
    user: "root",
  
    // Your password
    password: "password",
    database: "seinfeld_db"
  });

//Setup Express APP
var app = express()
var PORT = process.env.PORT || 3000

//Routes
//Cast Route
app.get('/cast', function(req,res) {
    var query = `SELECT * FROM actors`
    connection.query(query, function(err,response) {
        if (err) {
            console.log(err)
        } else {
            res.send(response)
        }
    })
})

//Coolness-Route
app.get('/coolness-chart', function(req,res) {
    var query = `SELECT * FROM actors ORDER BY COOLNESS_POINTS ASC`
    connection.query(query, function(err,response) {
        if (err) {
            console.log(err)
        } else {
            res.send(response)
        }
    })
})

//Attitude Route
app.get('/attitude-chart/:att', function(req,res) {
    var tude = req.params.att
    connection.query(`SELECT * FROM actors WHERE attitude = '${tude}'` 
    ,function(err,response) {
        if (err) {
            console.log(err)
        } else {
            res.send(response)
        }
    })
})

//Start App
app.listen(PORT, function() {
    console.log(`App listening on ${PORT}`)
})

