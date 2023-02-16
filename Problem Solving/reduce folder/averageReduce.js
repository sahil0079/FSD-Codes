//calculate average

numbers = [10,20,30,40,50]
let average = numbers.reduce((avg, value, _, arr) => avg + (value)/arr.length,0)

console.log(average)