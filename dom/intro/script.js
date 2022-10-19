// console.log(document)
// console.dir(document)

// console.log(document.domain)
// console.log(document.URL)
// console.log(document.title)
// console.log(document.body)
// console.log(document.head)
// console.log(document.all[4])


// document.title = 'Hello World'

// const body = document.body

// body.append('Hello Everyone', 'Bye') //it can append a text as well an html element
// body.appendChild('abcdefg') // it can only add or append the child elements

// const div = document.createElement("div") //craetes a new element
// const div2 = document.createElement("div") //craetes a new element

// const p = document.createElement('p')
// console.log(p)

// body.append(div)
// body.appendChild(div)
// div.appendChild(p)



// const body = document.body

// const div = document.createElement('div')

// // div.innerText = 'This is a div'

// div.textContent = 'this is a div'

// body.append(div)


// const div = document.querySelector("div")

// console.log(div.innerText)
// console.log(div.textContent)


// const body = document.body

// const div = document.createElement('div')

// const strong = document.createElement('strong')

// strong.innerText = 'This a bold text'

// div.append(strong)


// div.innerHTML = '<strong> This is a div </strong>'

// body.append(div)


const body = document.body
const div = document.querySelector('div')
const p1 = document.querySelector('#para1')
const p2 = document.querySelector('#para2')

// console.log(p1, p2)

// p2.remove()
// div.removeChild(p2)

// console.log(p1.getAttribute('title'))
// console.log(p1.title)

// p1.setAttribute('title', 'dasdsa')
// p1.id = 'title'

// p2.classList.add('new-class')
// p2.classList.remove('red')

p2.style.color = 'red'
p2.style.backgroundColor = 'aqua'


