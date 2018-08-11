var inquirer = require('inquirer');
var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "password",
  database: "great_bay"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId);
  connection.end();
  selectAction();
});

function selectAction(){
    inquirer
      .prompt([
        {
            type:"rawlist",
            name:"action",
            message:"Would you like to [POST] an auction or [BID] on an auction?",
            choices:["POST","BID"]
        }
      ])
      .then(answers => {
        // Use user feedback for... whatever!!
      });
}

function postItem() {
    inquirer
    .prompt([
      {
          type:"input",
          name:"itemName",
          message:"What is the name of your item?",
      },
      {
          type:"input",
          name:"startingBid",
          message:"Where do you want to start the bidding?",
      },

    ])
    .then(answers => {
      // Use user feedback for... whatever!!
    });
}