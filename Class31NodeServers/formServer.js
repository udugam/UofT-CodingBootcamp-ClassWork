var http = require('http')
var server = http.createServer(handleRequest)
var fs = require('fs')

var PORT = 7000

function handleRequest(req,res) {

    if(req.method==='POST') {
        var requestData = ''

        req.on('data', function(data) {
            requestData += data
        })
       
        req.on('end', function() {
            console.log(requestData)
            res.end()
        })
    } else if(req.method==='GET') {
        // Here we use the fs package to read our index.html file
        fs.readFile(__dirname + "/form.html", function(err, data) {
    
        // We then respond to the client with the HTML page by specifically telling the browser that we are delivering
        // an html file.
        res.writeHead(200);
        res.end(data);
        });

    }
  
}

server.listen(PORT,function() {
    console.log('Server is now listening on: http://localhost:'+PORT)
})

