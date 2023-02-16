

function curry(...a){

    return function(...b){
        if(b?.length){
            return curry([...a,...b].reduce((acc,curr) => acc + curr,0))
        }
        return +a
    }
}


console.log('Sum: ', curry(1,2,9)(5,8)(66,7,8,9)(11,2)())