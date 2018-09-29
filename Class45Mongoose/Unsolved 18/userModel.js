var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

// Using the Schema constructor, create a new UserSchema object
// This is similar to a Sequelize model
var UserSchema = new Schema({
  /* TODO:
   * Add four entries into our schema. These should be:
   *

   * 1: username: A string that will be be required, and also trimmed.
  
   * 2: password: A string that will be required, trimmed, and at least 6 characters.
   * 3: email: A string that must be a valid email address and unique in our collection.
   * 4: userCreated: A date that will default to the current date.
   *
   * TIP: The regex for checking if a string is an email is: /.+\@.+\..+/
   * Use that with the model attribute that checks for a valid match.
   * -/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/ */

   //1
   username: {
    type: String,
    trim: true,
    required: true
   },

   //2
   password: {
     type: String,
     trim: true,
     required: true,
     minlength: 6
   },

   //3
   email: {
     type: String,
     unique: true,
     match: [/.+@.+\..+/, "Please enter a valid email address"]
   },

   //4
   userCreated: {
     type: Date,
     default: Date.now
   }



});

UserSchema.methods.setFullName = function() {
  this.fullName = this.firstName + " " + this.lastName;
  return this.fullName;
}

UserSchema.methods.lastUpdatedDate = function() {
  this.lastUpdateDate = Date.now();
  return this.lastUpdateDate;
}
// Define the following custom instance methods here

// 1. setFullName: sets the current user's `fullName` property to their lastName appended to their `firstName`

// 2. lastUpdatedDate: sets the current user's `lastUpdated` property to Date.now()

// This creates our model from the above schema, using mongoose's model method


// This creates our model from the above schema, using mongoose's model method
var User = mongoose.model("User", UserSchema);

// Export the User model
module.exports = User;
