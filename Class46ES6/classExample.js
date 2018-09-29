class Vehicle {
    constructor(make, acceleration) {
        this.make = make;
        this.acceleration = acceleration;
        this.speed = 0;
    }

    accelerate() {
        this.speed += this.acceleration;
        console.log(`Current speed is ${this.speed}mph!`)
    }
    
    brake() {
        this.speed = 0;
        console.log(`Current speed is ${this.speed}mph!`)
        
    }
}

const Lambo = new Vehicle("Lamborghini",100)

Lambo.accelerate();
Lambo.accelerate();
Lambo.brake()
