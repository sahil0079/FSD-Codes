import React, { useEffect, useState } from 'react'

function Counter() {
  //top level management
  const [count, setCount] = useState(0)
  const [count2, setCount2] = useState(10)

  console.log(count)
  console.log(count2)


  //similar to componentDidMount
  // useEffect(function () {
  //   // console.log('This only runs one time after component mounts')

  //   document.title = `You clicked ${count} times `
  // }, []) //useEffect called with empty dependency array

  //similar to componentDidUpdate
  // useEffect(function () {
  //   // console.log('This only runs one time after component mounts')

  //   document.title = `You clicked ${count} times `
  // }, [count]) //useEffect called with  dependency array

  // useEffect(function () {
  //   // console.log('This only runs one time after component mounts')

  //   document.title = `You clicked ${count2} times `
  // }, [count2]) //useEffect called with  dependency array


  //similar component will unmount
  // useEffect(() => {

  //   return () => {
  //     //component will unmount code

  //     console.log('componet will unmount runs')
  //   }

  // }, [])



  // console.log(setCount)

  // let count = 0

  const increment = () => {

    setCount(count + 1)

    console.log(count)

  }

  return (
    <div style={{ marginLeft: '20px' }}>
      <h1>Counter: {count}</h1>
      <button onClick={increment} >+</button>
      <button onClick={() => setCount2(count2 + 1)} >increaseCount2</button>
    </div>

  )
}

function App() {

  const [showCounter, setShowCounter] = useState(false)



  return (
    <div className='app'>
      {
        showCounter && <Counter />
      }


      <br></br>
      <br></br>

      <button onClick={() => setShowCounter(true)} >Mount</button>
      <button onClick={() => setShowCounter(false)}>Unmount</button>



    </div>
  )
}

export default App