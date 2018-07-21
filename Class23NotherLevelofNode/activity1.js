//This code takes the two parameters passed to it, compares them, and then outputs if they are equal or not

process.argv[2]==process.argv[3] ? console.log("Equal!") : console.log("Not Equal!");

//This code takes the two parameters passed to it, and checks the remainder of dividing by 7.
//If there is no remainder for both both numbers then they both are mutiples of 7 
(process.argv[3]%7===0 && process.argv[2]%7===0) ? console.log("Mutiples of 7!") : console.log("Not Mutiples of 7!");
