
//track and store the values and it count in an object
let numbers = [12,12,2,2,4,5,6,4,6]

// const lookup = {}

// for (const num of numbers){

//     lookup[num] =  (lookup[num] ?? 0) + 1
// }
// console.log(lookup)


let obj = numbers.reduce((lookup, value) => ({
    ...lookup,
    [value]: (lookup[value] ?? 0) + 1
}), {})
console.log(obj)