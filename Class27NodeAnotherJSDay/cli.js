// Write code here to parse command line arguments and store them into variables
// Add code to print whether the user is searching for an actor or tv show, along with the name of the actor or tv show they are searching for

var TV = require('./tv.js')

var commandArray = process.argv
var search = commandArray[2]
var term = commandArray.slice(3).join(' ');

if(search==='show') {
    console.log('a show is being searched')
    var show = new TV()
    show.findShow(term)
} else if(search==='actor') {
    console.log('an actor is being searched')
    var actor = new TV()
    actor.findActor(term)
} else {
    search = 'show'
    term = 'Leave it to Beaver'
}
