greetings()
//due to hoisting function declaration will be called first as 
//it gets assigned memory in the memory create phase
//whereas var one will be undefined
var greetings = function(){

    console.log('First Greetings')
}
//at this point a var greetings has overwritten the previous greeting function
//as it has the same name so first greetings
greetings()

function greetings (){

    console.log('Second Greetings')

}
//Since there is only one greeting function left so first greeting
greetings()