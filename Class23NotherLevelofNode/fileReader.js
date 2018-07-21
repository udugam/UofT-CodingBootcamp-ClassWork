var fs = require('fs')

fs.readFile("best_things.txt", 'utf8', function (error, data) {
    var array = data.split(',');
    array.forEach(function(element){
        console.log(element);
    })
})