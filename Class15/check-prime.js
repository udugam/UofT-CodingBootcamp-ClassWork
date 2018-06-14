function checkPrime(number) {
    for(var i=2; i <= Math.sqrt(number) ;i++) {
        if (number%i===0 && i!=number) {
            return false;
        }
    }
    return true;
}

for(var i=2; i<300; i++) {
    if(checkPrime(i)) {
        console.log(i);
    }
}
