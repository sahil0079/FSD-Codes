



//helper funrtion to create a promise adn return it after some time
 
const asyncTask = (time) => {

    return new Promise((resolve) => {

        setTimeout(() => {resolve(`Competing ${time}`)}, 100*time)
    })
}

//creates an array of tasks

const promises = [
    asyncTask(1),
    asyncTask(2),
    asyncTask(3),
    asyncTask(4)
]

//main function to run promises in series

const asyncFuncExecuter = (promises) => {

    promises.reduce((acc,curr) =>{
        return acc.then(() => {
            //run the current promise
            return curr.then((val) => console.log(val))
        })
    } , Promise.resolve())
}
asyncFuncExecuter(promises)