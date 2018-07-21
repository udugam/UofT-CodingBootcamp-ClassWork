var fs = require('fs')

var operator = process.argv[2]
var input = process.argv[3]

if (operator=='withdraw') {
    input = parseFloat(input)*-1.00
    fs.appendFile('bank.txt',input,function(err) {
        console.log('Transaction Successful!')
    })
} else if (operator=='deposit') {
    fs.appendFile('bank.txt',input+',',function(err) {
        console.log('Transaction Successful!')
    })
} else if (operator=='balance') {
    fs.readFile('bank.txt','utf8',function(error,data) {
        var dataArray = data.split(',')
        var balance = 0;
        dataArray.forEach(function(element) {
            if(element) {
                balance += parseFloat(element);
            }
        })
        console.log(balance);
    })
}
