var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "password",
  database: "my_playlists"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId);
  connection.end();
});

// create({
//     artist: "Drake",
//     title: "Forever",
//     genre: "Hip Hop"
// })

// remove("free smoke")
 queryAllSongs()
 updateTitle("All Me","This song sucks")


function queryAllSongs() {
    connection.query("SELECT * FROM songs", function(err,res) {
        console.log(res)
    })
}

function create(song) {
    connection.query("INSERT INTO songs SET ?", {
        artist: song.artist,
        title: song.title,
        genre: song.genre
    }, 
    function (error, results, fields) {
        if (error) throw error;
        //console.log(results);
    })
    queryAllSongs()
}

function remove(songName) {
    connection.query("DELETE FROM songs WHERE ?", {
        title: songName
    }, 
    function (error, results, fields) {
        if (error) throw error;
        //console.log(results);
    })
    queryAllSongs()
}

function updateTitle(oldTitle,newTitle) {
    connection.query("UPDATE songs SET ? WHERE ?", [
    {
        title: newTitle
    },
    {
        title: oldTitle
    },
    ], 
    function (error, results, fields) {
        if (error) throw error;
        //console.log(results);
    })
    queryAllSongs()
    // UPDATE table_name
    // SET column1 = value1, column2 = value2, ...
    // WHERE condition;
}