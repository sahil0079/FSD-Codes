const grandparent = document.querySelector('#grandParent')
const parent = document.querySelector("#parent")
const child = document.querySelector('#child')

grandparent.addEventListener('click', () => {
    console.log('grandparent clicked')
}, true)


parent.addEventListener('click', (e) => {
    console.log('parent clicked')
    e.stopPropagation()
}, true)

child.addEventListener("click", (e) => {
    // alert('clicked')
    console.log('child clicked')
    // console.log(event)
}, true)

// document.addEventListener('click', () => {
//     console.log('document clicked')
// }, false)

