

var start = getElement('start')
var reset = getElement('reset')

var hour = getElement('hour')
var minute = getElement('minute')
var second = getElement('second')

var startTimer = null
function startInterval() {
    startTimer = setInterval(function () {
        timer()
    }, 1000)
}
window.onload = startInterval


start.addEventListener('click', function () {



    startInterval()
})

reset.addEventListener('click', function () {
    hour.value = 0
    minute.value = 0
    second.value = 0

    stopInterval()
})

function timer() {
    if (hour.value == 0 && minute.value == 0 && second.value == 0) {
        hour.value = 0
        minute.value = 0
        second.value = 0
    } else if (second.value != 0) {
        second.value--;
    } else if (minute.value != 0 && second.value == 0) {
        second.value = 59
        minute.value--

    } else if (hour.value != 0 && minute.value == 0) {
        minute.value = 60
        hour.value--
    }
    return
}

function stopInterval() {
    clearInterval(startTimer)
}









function getElement(id) {
    return document.getElementById(id)
}

