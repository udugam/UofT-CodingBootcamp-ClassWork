class DigitalPal {
  constructor(hungry,sleepy,bored) {
    this.hungry = hungry || false;
    this.sleepy = sleepy || false;
    this.bored = bored || false;
    this.age = 0;
  }

  feed() {
    console.log("Owner: Hey pal, dinner time!");
    if (this.hungry) {
      console.log("Pet: That was yummy!\n");
      this.hungry = false;
      this.sleepy = true;
    }
    else {
      console.log("Pet: No thanks, I'm full.\n");
    }
  }

  sleep() {
    console.log("Owner: Hey pal, time for bed!");
    if (this.sleepy) {
      console.log("Pet: ZZzzZZZzzzZZz~~");
      this.sleepy = false;
      this.bored = true;
      this.increaseAge();
    }
    else {
      console.log("Pet: No way! I'm not tired!\n");
    }
  }

  play() {
    this.sleepy = Boolean(Math.round(Math.random()));
    console.log("Owner: Hey pal, wanna play?");
    if (this.bored) {
      console.log("Pet: Yay! Let's play!");
      this.bored = false;
      this.hungry = true;
    }
    else if (this.sleepy) {
      console.log("Pet: I'm too tired to play 😴\n");
    }
    else if (this.hungry) {
      console.log("Pet: I'm too hungry to play 😩 💭 🍕\n");
    }
    else {
      console.log("Pet: Not right now, maybe later?\n");
    }
  }

  increaseAge() {
    this.age++;
    console.log("Pet: Happy Birthday to me! I am " + this.age + " old!\n");
  }
}

// Initialize new DigitalPal
var dog = new DigitalPal(true, false, false);

dog.play();
dog.feed();
dog.play();
dog.sleep();
