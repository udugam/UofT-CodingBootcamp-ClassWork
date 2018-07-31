var request = require('request')
var fs = require('fs')

var TV = function() {
  this.findShow = function(show) {
    // The following URL can be used to search the TV Maze API for a given show
    var URL = "http://api.tvmaze.com/singlesearch/shows?q=" + show;
    request(URL, function (error, response, body) {

      var parsedResponse = JSON.parse(body)

      var showDetails =   'Name: ' + parsedResponse.name + "\n" +
                          'Genres(s): ' + parsedResponse.genres + "\n" +
                          'Average Rating: ' + parsedResponse.rating.average + "\n" +
                          'Network Name: ' + parsedResponse.network.name + "\n" +
                          'Summary: ' + parsedResponse.summary + "\n\r"

      fs.appendFile('log.txt', showDetails + "\n",function(err) {
        err ? console.log(err) : null
      })

      console.log(showDetails)
    });
  },
  this.findActor = function(actor) {
    var URL = "http://api.tvmaze.com/search/people?q=" + actor;
    request(URL, function (error, response, body) {

      var parsedResponse = JSON.parse(body)

      var actorDetails =  'Name: ' + parsedResponse[0].person.name + "\n" +
                          'Birthday: ' + parsedResponse[0].person.birthday + "\n" +
                          'Gender: ' + parsedResponse[0].person.gender + "\n" +
                          'Country: ' + parsedResponse[0].person.country.name + "\n" +
                          'URL: ' + parsedResponse[0].person.url + "\n\r"

      fs.appendFile('log.txt', actorDetails + "\n",function(err) {
        err ? console.log(err) : null
      })

      console.log(actorDetails)
    })
  }
};

module.exports = TV;

