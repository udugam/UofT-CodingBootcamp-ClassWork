
//ES6
// import genres from './artists'
require('./artists.js');

if(process.argv[2]) {
    var genre = process.argv[2]
    console.log("A "+genre+" band is "+genres[genre])
} else {
    for (key in genres) {
        console.log("A "+key+" band is "+genres[key])
    }
}
