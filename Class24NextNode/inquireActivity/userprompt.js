var inquirer = require('inquirer')
var storedPassword = 'rubber duck'

inquirer.prompt(
    {
        type: 'checkbox',
        name: 'userPassword',
        choices: ['chicken','rubber duck','zebra'],
        message: "Please select the correct password"
    }
).then(function(response) {
    console.log(response)
    response.userPassword==storedPassword ? console.log(storedPassword + " is your password!") : console.log("Wrong Password")
})