function Character(name,profession,gender,age,strength,hitPoints) {
    this.name = name,
    this.profession = profession,
    this.gender = gender,
    this.age = age,
    this.strength = strength,
    this.hitPoints = hitPoints,
    this.printStats = function() {
        console.log(this.name,this.profession,this.gender,this.age,this.strength,this.hitPoints)
    },
    this.isAlive = function() {
        this.hitPoints>0 ? console.log(this.name + ' is Alive!') : console.log(this.name + ' is Deadski')
    },
    this.attack = function(opponentStrength) {
        this.hitPoints -= opponentStrength;
    },
    this.levelUp = function() {
        this.age++;
        this.strength += 5;
        this.hitPoints += 25;
    }
}

var Char1 = new Character('Ryan','Developer','Male',33,150,1000);
var Char2 = new Character('Rochelle','Lawyer','Female',32,100,1000);

Char1.printStats();
Char2.printStats();
console.log('\n')

Char1.isAlive();
Char2.isAlive();
console.log('\n')

Char1.attack(Char2.strength)
Char2.attack(Char1.strength)

Char1.printStats();
Char2.printStats();
console.log('\n')

Char1.levelUp()
Char2.levelUp()

Char1.printStats();
Char2.printStats();
console.log('\n')
