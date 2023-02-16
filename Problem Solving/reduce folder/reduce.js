let instance;
class Counter{

    constructor(){

        if(instance){
            console.log('instance')
            throw new Error('You can only create one instance')
        }

        console.log('hello')
        instance = this
    }
}


const counter1 = new Counter()
const counter2 = new Counter()

console.log(counter1)