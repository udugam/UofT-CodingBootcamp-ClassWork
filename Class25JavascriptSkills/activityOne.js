var dogs = {
    raining: true,
    noise: "Woof!",
    makeNoise: function() {
        this.raining ? console.log(this.noise) : null
    }
}

var cats = {
    raining: false,
    noise: "Meow!",
    makeNoise: function() {
        this.raining ? console.log(this.noise) : null
    }
}

dogs.makeNoise()
cats.raining = true
cats.makeNoise()
massHysteria(cats,dogs)

function massHysteria (cats, dogs) {
    (cats.raining && dogs.raining) ? console.log ("“DOGS AND CATS LIVING TOGETHER! MASS HYSTERIA!”") : null
}