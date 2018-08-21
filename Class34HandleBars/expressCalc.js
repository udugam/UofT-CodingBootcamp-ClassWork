var express = require("express")

var app = express()
var PORT = process.env.PORT || 3000;

//Add two numbers
app.get("/add/:firstNum/:secondNum", function(req,res) {
    var sum = parseFloat(req.params.firstNum) + parseFloat(req.params.secondNum)
    return res.json(sum)
})

//Subtract two numbers
app.get("/subtract/:firstNum/:secondNum", function(req,res) {
    var difference = parseFloat(req.params.firstNum) - parseFloat(req.params.secondNum)
    return res.json(difference)
})

//Mutiply two numbers
app.get("/multiply/:firstNum/:secondNum", function(req,res) {
    var product = parseFloat(req.params.firstNum)*parseFloat(req.params.secondNum)
    return res.json(product)
})

//Divide two numbers
app.get("/divide/:firstNum/:secondNum", function(req,res) {
    var quotient = parseFloat(req.params.firstNum)/parseFloat(req.params.secondNum)
    return res.json(quotient)
})

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
})