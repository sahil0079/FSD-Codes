import React, { useState } from 'react'
import './App.css'
// import image from './image1.jpeg'
// import data from './data'

// import { makeDataUpperCase } from './utils'

const MyDummyComponent = React.lazy(() => import('./Dummy'))

// const MyComponentOne = React.lazy(() => import('./ComponentOne'))

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
      {/* 
      {
        data && <MyDummyComponent />
      } */}


      <React.Suspense fallback={<h2>Loading....</h2>}>
        <MyDummyComponent />

      </React.Suspense>

      <button onClick={showData}>Click to view Data</button>
    </div>
  )
}

export default App