var Student = require('./studentConstructor.js')

function ClassRoom(roomNum, professorName) {
    this.students = []
    this.addStudent = function(name,subject,GPA) {
        this.students.push(new Student(name,subject,GPA))
    }
    this.numStudents = this.students.length,
    this.professorName = professorName,
    this.roomNum = roomNum
}

module.exports = ClassRoom
