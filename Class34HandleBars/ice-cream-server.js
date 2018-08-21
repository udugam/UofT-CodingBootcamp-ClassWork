var express = require('express')
var exphbs = require('express-handlebars')

var app=express()
var PORT = process.env.PORT || 3000

//Setup Handlebars
app.engine('handlebars', exphbs({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')

var icecreams = [
    {name: 'vanilla', price: 10, awesomeness: 3},
    {name: 'chocolate', price: 4, awesomeness: 8},
    {name: 'banana', price: 1, awesomeness: 1},
    {name: 'greentea', price: 5, awesomeness: 7},
    {name: 'jawbreakers', price: 6, awesomeness: 2},
];


//Routes
app.get('/', function(req,res) {
    res.render('home')
})

app.get('/icecreams', function(req,res) {
    res.render('icList', {icecreams})
})


app.get('/:ice_cream', function(req,res) {
    var choice = req.params.ice_cream
    icecreams.forEach(function(element) {
        if(element.name === choice) {
            res.render('ice-cream', {
                icName: element.name,
                icPrice: element.price,
                icAwesomeness: element.awesomeness  
            })
        }
    })
})

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
})

