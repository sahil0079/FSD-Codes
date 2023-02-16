function sum(){
    let a = 20

    function add(b){
        return a + b
    }

    return add
}
// sum will return a function that will accept an argument
const fn = sum()
// pass the argument and it will sum with
// the value of variable 'a' that is in outer scope
// and return the total
let total = fn(20)

console.log(total) // 40