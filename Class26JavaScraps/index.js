var ClassRoom = require('./classConstructor.js')


var codingClass = new ClassRoom(212,"Professor Udugam")
console.log(codingClass)

codingClass.addStudent('Ryan','Programming',4.0);
console.log(codingClass)

codingClass.addStudent('Rochelle','Law',4.0);
console.log(codingClass)

codingClass.addStudent('Leo','Playtime',4.0);
console.log(codingClass)