import React, { useEffect, useState } from 'react'
import useFetchData from './components/customHooks/useFetchData'

function App() {



  const [userData] = useFetchData('https://jsonplaceholder.typicode.com/users')

  const [dogData] = useFetchData("https://dog.ceo/api/breeds/image/random")






  return (
    <div>
      <h1> {userData[0]?.name} </h1>
      <p>{userData[0]?.email
      }</p>
      <img src={dogData?.message} />
    </div>
  )
}

export default App