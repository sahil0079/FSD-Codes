
const numbers = [10,20,30,40]


// arr.reduce((acc, curr, index, array) => { //syntax

// }, 0)

//basic sum and multiplication
let sum = numbers.reduce((acc, curr) => {
    acc = acc + curr
    return acc
},0)

console.log(sum)

//implicit single liner

//let sum = numbers.reduce((acc,curr) => acc + curr, 0)