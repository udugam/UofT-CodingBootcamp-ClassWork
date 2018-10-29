var unsortedArray = [201, 39, 54, 461, 93, 377, 413, 176, 164, 317, 109, 113, 36, 235, 17, 60, 53, 474, 257, 48]
var max = Math.max(...unsortedArray)
var min = Math.max(...unsortedArray)
var minIndex = null

unsortedArray.forEach(function(element,index) {
    if(element<min) {
        min=element
        minIndex=index
    }
})

console.log