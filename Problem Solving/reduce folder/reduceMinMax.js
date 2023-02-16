

let numbers = [12,2,3,4,5,4,3,2,1,10]

let minMax =  numbers.reduce(({min, max}, value) => ({

    min: Math.min(min, value),
    max: Math.max(max, value),


}),{

    min: Infinity,
    max: -Infinity
})

minMax