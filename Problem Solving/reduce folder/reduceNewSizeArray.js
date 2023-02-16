let groups = [

    [2,3],
    [3,7],
    [4,5]
]

// let result = groups.reduce((arr, [count,value] ) => {

//     for(let index = 0; index < count; index++){
//         arr.push(value)
//     }
//     return arr
// },[])

// console.log(result)


//easy method
let result = groups.reduce((arr, [count,value] ) => [
    ...arr, ...Array(count).fill(value)
],[])

console.log(result)

