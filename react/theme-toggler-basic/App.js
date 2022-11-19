import React, { useContext } from 'react'
import './App.css'
import { ThemeContext } from './contexts/ThemeProvider'



function App() {

  const { toggle, toggleFunction } = useContext(ThemeContext)
  console.log(toggle)
  return (
    <div className='app' style={{ backgroundColor: toggle ? 'pink' : 'blue' }} >
      <div className='section'>
        <h1>Context API</h1>
        <button onClick={toggleFunction} >Change the theme</button>
      </div>

    </div>
  )
}

export default App