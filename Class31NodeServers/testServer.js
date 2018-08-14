var http = require('http')
var request = require('request')
var server= http.createServer(handleRequest)

var PORT = 7000

function handleRequest(req,res) {
    var requestUrl = req.url
    var movieName = requestUrl.slice(1,requestUrl.length)
 
    var queryUrl = `http://www.omdbapi.com/?t=${movieName}&y=&plot=short&apikey=trilogy`;
    
    // Then create a request to the queryUrl
    request(queryUrl,function(error,response,body) {
        // If the request is successful
        if(!error && response.statusCode=='200') {
            // Then log the Release Year for the movie
            res.writeHead(200);
            res.end(body);
        }
    })
}

server.listen(PORT,function() {
    console.log('Server is now listening on: http://localhost:'+PORT)
})

