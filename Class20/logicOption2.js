var config = {
  apiKey: "AIzaSyA8hdG1Zf-C0CrokcZJ1NmF11sTZ1H3ngA",
  authDomain: "countdown-button-with-fi-a522a.firebaseapp.com",
  databaseURL: "https://countdown-button-with-fi-a522a.firebaseio.com",
  projectId: "countdown-button-with-fi-a522a",
  storageBucket: "",
  messagingSenderId: "18792636648"
};

// Initialize Firebase (YOUR OWN APP)
firebase.initializeApp(config);

// Set Initial Counter
var initialValue = 10;
var clickCounter = initialValue;
var database = firebase.database();
var snap = 0;

// --------------------------------------------------------------

// At the initial load, get a snapshot of the current data.
database.ref().once("value").then(function(snapshot) {
  console.log(snapshot.val()); // Print the initial data to the console.
  snap = snapshot;
});


// Change the html to reflect the initial value.
$("#click-value").text(initialValue);


// Change the clickCounter to match the data in the database
clickCounter = snap.val().clickCounter;

// Log the value of the clickCounter


// Change the HTML Value


// If any errors are experienced, log them to console.

// --------------------------------------------------------------

// Whenever a user clicks the click button
$("#click-button").on("click", function() {

  // Reduce the clickCounter by 1


  // Alert User and reset the counter


  // Save new value to Firebase


  // Log the value of clickCounter


});

// Whenever a user clicks the restart button
$("#restart-button").on("click", function() {

  // Set the clickCounter back to initialValue


  // Save new value to Firebase


  // Log the value of clickCounter


  // Change the HTML Values

});
