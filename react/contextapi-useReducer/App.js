import React, { createContext, useReducer } from 'react'
import './App.css'
import Value from './components/Value'

export const CountContext = createContext()

const initialState = 0



const reducer = (state, action) => {

  switch (action.type) {

    case 'increment':
      return state + action.payload;

    case 'decrement':
      return state - 1;

    case 'reset':
      return initialState

    default:
      return state
  }

}

//increment
//decrement
//reset

function App() {

  const [count, dispatch] = useReducer(reducer, initialState)

  console.log(count)
  return (
    <CountContext.Provider value={{ countState: count, countDispatch: dispatch }}>

      <div className='container'>
        <h1> {count} </h1>
        <Value />
      </div>

    </CountContext.Provider>

  )
}

export default App