import React, { useState } from 'react'
import './App.css'
// import data from './data'

// import { makeDataUpperCase } from './utils'

function App() {

  const [data, setData] = useState(null)


  const showData = async () => {

    const data = (await import('./data')).default

    const makeDataUpperCase = (await import('./utils'/* webpackChunkName: 'utils' */)).makeDataUpperCase

    setData(makeDataUpperCase(data))

    // import('./data').then((module) => {
    //   setData(module.default)

    //   import('./utils' /* webpackChunkName: 'utilities' */).then(({ makeDataUpperCase }) => {

    //     setData((data) => makeDataUpperCase(data))
    //   })


    // })


  }
  return (
    <div className='app'>
      <h1>Code Splitting</h1>
      <div> {JSON.stringify(data)} </div>

      <button onClick={showData}>Click to view Data</button>
    </div>
  )
}

export default App