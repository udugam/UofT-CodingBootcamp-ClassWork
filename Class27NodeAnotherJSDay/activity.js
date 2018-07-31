var fs = require('fs')

function stringRun (string, passedFunc) {
    console.log(string)
    passedFunc()
}

function boolRun (bool, passedFunc) {
    bool? passedFunc() : null
}

function runOnArg (passedFunc, value) {
    passedFunc(value)
}

function testFunc() {
    console.log('It works!')
}

function testFunc2(value) {
    console.log('This is the passed value: ',value)
}

fs.writeFile('file.txt','this is my message', function(err) {
    err ? console.log(err) : null
})

stringRun('first function test', testFunc)
boolRun(true,testFunc)
runOnArg(testFunc2,'Ryan')