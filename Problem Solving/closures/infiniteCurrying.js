
//infinite currying using closures
let sum =  function (a){

    //a will be coming from very first argument
    //result will store either a or a + b if b is there
    let result;
    return function (b){

        if(b){
            result = a + b
            return sum(result)
            //again recursively check for the next set of arguments
        }
        return a

    }
}

console.log(sum(10)(20)(30)(60)())