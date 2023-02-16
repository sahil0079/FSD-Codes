function x(name){
    this.name = name
   
}

x.prototype.ask = function(question){
    console.log(this.name, question)
}

var obj1 = new x('john')
var obj2 = new x('pete')
obj1.ask('Who are you')
obj2.ask('Who are you')

