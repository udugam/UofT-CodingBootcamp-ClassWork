var http = require ('http')

var PORT = 8080

function handleRequest (request,response) {
    response.end('Yay! It worked Path: '+request.url)
}

var server = http.createServer(handleRequest) 

server.listen(PORT, function() {
    console.log('Server is now listening on: http://localhost:'+PORT)
})