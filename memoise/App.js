import React, { useMemo, useState } from 'react'

//memoization in javascript
//caching, performance
// let previousValues = []
// function square(num) {

//   if (previousValues[num] != null) {
//     return previousValues[num]
//   }

//   let output = 0

//   for (let i = 1; i <= num; i++) {
//     for (let j = 1; j <= num; j++) {
//       output += 1
//     }
//   }
//   previousValues[num] = output
//   return output
// }
// console.log(square(40000))
// console.log(square(40000))
// console.log(square(30000))
// console.log(square(30000))


function Shape({ obj }) {
  console.log(`Shape Component rendered ${obj.color}`)
  return <div style={{
    margin: 2, backgroundColor: obj.color, height: 100, width: 100
  }} ></div>

}
const MemoisedShape = React.memo(Shape)

function App() {

  const [appRenderIndex, setAppRenderIndex] = useState(0)
  const [color, setColor] = useState('tomato')

  const obj = useMemo(() => ({ color }), [color])

  console.log(`App rendered ${appRenderIndex}`)
  return (
    <div>
      <button onClick={() => setAppRenderIndex(appRenderIndex + 1)}>Re Render App</button>
      <button onClick={() => setColor(color === "tomato" ? 'blue' : 'tomato')}>Change shape color</button>
      <MemoisedShape obj={obj} />
    </div>

  )
}

export default App