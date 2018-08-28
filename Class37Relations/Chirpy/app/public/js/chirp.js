// *********************************************************************************
// TO DO:
// 1. Display all chirps on page load
// 2. Add new chirp to database and prepend to existing chirps
// *********************************************************************************

// When the page loads, grab and display all of our chirps
$(document).ready(getChirps())

// When user chirps
$('#submitChirp').on('click', function(){
    var chirpObj = {
        author: $('#author').val(),
        chirp: $('#chirp').val()
    }

    $.ajax({
        url: '/api/chirp',
        method: 'POST',
        data: chirpObjls
    }).then(function() {
       getChirps()
    }) 
})


function getChirps() {
    $.ajax({
        url: '/api/chirps',
        method: 'GET'
    }).then(function(response) {
        console.log(response)
        var chirpsArray = JSON.parse(response)
        chirpsArray.forEach(function(element) {
            $("#chirps").append(`<li>${element}</li>`)
        })
    }) 
}