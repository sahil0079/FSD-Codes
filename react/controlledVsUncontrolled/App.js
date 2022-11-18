import React from 'react'
import './App.css'
import NameFormUncontrolled from './components/NameFormUncontrolled'
import NameFormControlled from './components/NameFormControlled'

function App() {



  return (
    <div className="name-form">
      <NameFormUncontrolled />
      {/* <NameFormControlled /> */}
    </div>
  )
}

export default App