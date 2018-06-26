
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyAGR6hhd8i6WJNbPqjyCr0XsAkl-y-XwZQ",
    authDomain: "coderbay-9c11c.firebaseapp.com",
    databaseURL: "https://coderbay-9c11c.firebaseio.com",
    projectId: "coderbay-9c11c",
    storageBucket: "",
    messagingSenderId: "34184450989"
  };
  firebase.initializeApp(config);
// Make sure to match the configuration to the script version number in the HTML
// (Ex. 3.0 != 3.7.0)

// Assign the reference to the database to a variable named 'database'
var database = firebase.database();


// Initial Values
var initialBid = 0;
var initialBidder = "No one :-(";
var highPrice = initialBid;
var highBidder = initialBidder;

// --------------------------------------------------------------

//  At the page load and subsequent value changes, get a snapshot of the stored data.
// This function allows you to update your page in real-time when the firebase database changes.
database.ref().on("value", function(snapshot) {

    // If Firebase has a highPrice and highBidder stored (first case)
    if(snapshot.val()) {
        // Set the variables for highBidder/highPrice equal to the stored values in firebase.
        highPrice = snapshot.val().highPrice;
        highBidder = snapshot.val().highBidder;
        
        // Change the HTML to reflect the stored values
        $("#highest-bidder").text(highBidder);
        $("#highest-price").text(highPrice);
    } else {
        // Else Firebase doesn't have a highPrice/highBidder, so use the initial local values.
        highPrice = initialBid;
        highBidder = initialBidder;
        
        // Change the HTML to reflect the stored values
        $("#highest-bidder").text(highBidder);
        $("#highest-price").text(highPrice);
        
    }
})

// --------------------------------------------------------------

// Whenever a user clicks the submit-bid button
$("#submit-bid").on("click", () => {
    // prevent form from submitting with event.preventDefault() or returning false
    event.preventDefault();
    
    // Get the input values
    var bidderName = $("#bidder-name").val();
    var bidderPrice = $("#bidder-price").val();
    
 
    // If Then statements to compare against previous high bidder
    if (bidderPrice > highPrice) {
        // Alert that they are High Bidder
        alert("You are the highest bidder!");
        
        // Save the new price and Bidder in Firebase
        database.ref().set({
            highPrice: parseInt(bidderPrice),
            highBidder: bidderName
        })
        
        // Change the HTML to reflect the new high price and bidder
        $("#highest-bidder").text(highBidder);
        $("#highest-price").text(highPrice);
        
    } else {
        // Else tell user their bid was too low via alert
        alert("Your bid must be greater than current highest bid");
    } 
})





