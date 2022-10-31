
// setTimeout(function, delay, param1, param2 ...)

// setTimeout((greeting, all) => {
//     console.log(greeting + " " + all)
// }, 1000, 'hello', 'everyone')

const start = document.querySelector('#start')
const clear = document.querySelector('#clear')

// start.addEventListener('click', function (e) {

//     timer = setTimeout(() => {
//         alert('It is taking 4 seconds time')
//     }, 4000)


// })

// clear.addEventListener('click', function (e) {


//     clearTimeout(timer)


// })


start.addEventListener('click', function (e) {
    count = 0
    interval = setInterval(() => {

        document.getElementById('para').innerHTML = count

        count++

    }, 1000)


})

clear.addEventListener('click', function (e) {


    clearInterval(interval)


})