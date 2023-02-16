
const numbers = [1, 2, 3, 4, 5];

let arr = [];
//using for of
for (const num of numbers) {
	arr = [num, ...arr];
}
console.log(arr);

//using reduce
let reverse = numbers.reduceRight((acc, curr) => [
    ...acc,
    curr
], [])
reverse
