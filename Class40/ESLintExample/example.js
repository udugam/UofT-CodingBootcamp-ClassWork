var num1 = parseInt(window.prompt('Give me a number!'))
var num2 = parseInt(window.prompt('Give me another number!'))
var result

var operation = window.prompt('What would you like to do? (add, subtract, multiply, divide)').toUpperCase();

if (operation === 'ADD') {
  result = num1 + num2
  window.alert('The sum of ' + num1 + ' and ' + num2 + ' is ' + result)
} else if (operation === 'SUBTRACT') {
  result = num1 - num2
  window.alert('The difference between ' + num1 + ' and ' + num2 + ' is ' + result)
} else if (operation === 'MULTIPLY') {
  result = num1 * num2
  window.alert('The product of ' + num1 + ' and ' + num2 + ' is ' + result)
} else if (operation === 'DIVIDE') {
  result = num1 / num2
  window.alert('The quotient of ' + num1 + ' and ' + num2 + ' is ' + result)
} else {
  window.alert('Not a valid option!')
}
