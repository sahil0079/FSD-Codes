let sum = function (a){
    console.log(a)

    return function(b){
        if(b){
             return a + b
        }
            return a
    }


    

}


console.log(sum(10)())