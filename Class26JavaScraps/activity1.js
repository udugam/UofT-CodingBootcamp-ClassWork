function Programmer(name, position, age, favLanguage) {
    this.name = name,
    this.position = position,
    this.age = age,
    this.favLanguage = favLanguage
    this.printInfo = function() {
        console.log(this.name,this.position,this.age,this.favLanguage)
    }
}

var NewEmployee = new Programmer('Ryan','Dev',33,'Javascript')

NewEmployee.printInfo();