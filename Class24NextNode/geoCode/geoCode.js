var geocoder = require('geocoder');

var commandArray = process.argv
var location = commandArray.slice(2).join(' ');

// Geocoding
geocoder.geocode(location, function ( err, data ) {
    !err ? console.log(JSON.stringify(data,null,2)) : console.log(err)
});