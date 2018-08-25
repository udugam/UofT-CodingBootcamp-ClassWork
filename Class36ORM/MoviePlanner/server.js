var express = require('express')
var bodyParser = require('body-parser')
var exphbs = require('express-handlebars')
var mysql = require('mysql')

var app = express()

var PORT = process.env.PORT || 8080

app.use(bodyParser.urlencoded({extender:true}))
app.use(bodyParser.json())

app.engine('handlebars', exphbs({defaultLayout:'main'}))
app.set('view engine','handlebars')

var connection = mysql.createConnection({
    host: 'localhost',
    port: 3306, 
    user: 'root',
    password: 'password',
    database: 'moviePlannerDB'
})

connection.connect( function(err) {
    if (err) throw err
    console.log(`You are successfully connected to your DB`)
})

