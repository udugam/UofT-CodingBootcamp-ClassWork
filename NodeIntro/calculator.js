if(process.argv[2]==='add') {
    console.log(parseInt(process.argv[3])+parseInt(process.argv[4]))
} else if (process.argv[2]==='subtract') {
    console.log(parseInt(process.argv[3])-parseInt(process.argv[4]))
    
} else if (process.argv[2]==='multiply') {
    console.log(parseInt(process.argv[3])*parseInt(process.argv[4]))
    
} else if (process.argv[2]==='divide') {
    console.log(parseInt(process.argv[3])/parseInt(process.argv[4]))
    
} else if (process.argv[2]==='remainder') {
    console.log(parseInt(process.argv[3])%parseInt(process.argv[4]))

} else if (process.argv[2]==='exp') {
    console.log(Math.pow(parseInt(process.argv[3]),parseInt(process.argv[4])))

} else if (process.argv[2]==='algebra') {
    //Formatt of input is ax+b=c thus x=(c-b)/a
    
    var equation = process.argv[3]
    equation += '&'
    
    var a = parseInt(equation.substring(0,equation.indexOf('x')))
    var b = parseInt(equation.substring(equation.indexOf('+'),equation.indexOf('=')))
    var c = parseInt(equation.substring(equation.indexOf('=')+1,equation.length-1))

    console.log((c-b)/a);
}