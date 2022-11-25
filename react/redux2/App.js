import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, signin } from './actions'
import './App.css'

function App() {

  const counter = useSelector((state) => state.counter)
  const isLogged = useSelector((state) => state.isLogged)

  const dispatch = useDispatch()

  return (
    <div className='app'>
      <h1>Counter: {counter} </h1>
      <button onClick={() => dispatch(increment(10))} >+</button>
      <button onClick={() => dispatch(decrement())}>-</button>

      {
        isLogged ? <h3> Some important users information</h3> : ""

      }
      <button onClick={() => dispatch(signin())} > {isLogged ? 'Logout' : 'Login'} </button>

    </div>
  )
}

export default App