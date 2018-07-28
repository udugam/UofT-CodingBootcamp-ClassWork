var inquirer = require('inquirer')

function Player(name,position,offense,defense) {
    this.name = name,
    this.position = position,
    this.offense = offense,
    this.defense = defense,
    this.printInfo = function() {
        console.log("Name: " + this.name + "\nPosition: " + this.position +
        "\nOffense: " + this.offense + "\nDefense: " + this.defense);
    },
    this.goodGame = function() {
        if (coinFlip() == 0) {
            this.offense++
        } else if (coinFlip() == 1) {
            this.defense++
        }
    },
    this.badGame = function() {
        if (coinFlip() == 0) {
            this.offense--
        } else if (coinFlip() == 1) {
            this.defense--
        }
    }
}

var starters = []
var subs = []
var count=1
var round=1
var teamScore=0
inputPlayers()


function inputPlayers() {
    if (count<4) {
        inquirer.prompt([
            {
              name: "name",
              message: "What is the player's name?"
            }, {
              name: "position",
              message: "What is the player's position?"
            }, {
              name: "offense",
              message: "What is the player's offensive rating?"
            }, {
              name: "defense",
              message: "What is the player's defensive rating?"
            }
          ]).then(function(answers) {
            // initializes the variable newProgrammer to be a programmer object which will take
            // in all of the user's answers to the questions above
            var newPlayer = new Player(answers.name, answers.position, answers.offense, answers.defense);
            // printInfo method is run to show that the newProgrammer object was successfully created and filled
            newPlayer.position === 'starter' ? starters.push(newPlayer) : subs.push(newPlayer)
            count++
            inputPlayers()
          });
    } else {
        console.log(starters,subs)
        playGame(starters,subs)
    }
}

function playGame(starters,subs) {
    var teamScore = 0
    var randOff = randNum(20)
    var randDef = randNum(20)
    var teamOff = 0
    var teamDef = 0
    if(round<6){
        //Calculate combined team offense and defense
        starters.forEach(function(element) {
            teamOff += element.offense
            teamDef += element.defense 
        })

        //Compare rnadom offense and defense value with teams values, and adjust team score accordingly
        if(randOff<teamOff) {
            teamScore++
        }
        if(randDef>teamDef) {
            teamScore--
        }
        //Prompt user for substitute option
        round++
    } else {
        if (teamScore>0) {
            starters.forEach( function(element) {
                element.goodGame()
            })
            console.log("Your Team Won!")
        } 
        if (teamScore<0) {
            starters.forEach( function(element) {
                element.badGame()
            })
            console.log("Your Team Lost!")
        }
    }
    playGame()
}

function randNum(limit) {
    return Math.floor(Math.random()*limit)
}

function coinFlip() {
    return Math.floor(Math.random()*2)
}

// # **Instructions**

// * Over the course of this assignment you are going to put together a function which uses constructors and user input to create and manage a team of players.

//   * Run 5 times. Each time the function runs:
//     * After the score has been changed, prompt the user to allow them to substitute 1 player from within the starters array with the player from within the subs array.
//   * After the game has finished (been run 5 times):
//     * Give the user a message about if they won, and the status of their starters.
//     * After printing the results, ask the user if they would like to play again.
//       * Run `playGame` from the start once more if they do.
//       * End the program if they don't.

// * HINT: Remember to use recursion when looping with inquirer! Otherwise your program might not return the prompts as you expect.

// * HINT: It has been a while since we have worked with random numbers explicitly. If you are having troubles, look up Math.random on Google and you should find some resources to help.