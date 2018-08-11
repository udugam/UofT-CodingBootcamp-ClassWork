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
  database: "top_songsDB"
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
            type:"list",
            name:"action",
            message:"What would you like to do? (Use arrow keys)",
            choices:["Find song by artist","Find all artists who appear more than once","Find data within a specific range",]
        }
      ])
      .then(answer => {
          if(answer.action==="Find song by artist") {
              findSongByArtist();
          }
      });
}

function findSongByArtist() {
    inquirer
    .prompt([
      {
          type:"input",
          name:"artist",
          message:"What is the name of the Artist?"
      }
    ])
    .then(answer => {
        var artist = answer.action
        
    });
}


