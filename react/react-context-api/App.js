import React, { createContext, useContext } from 'react'
import User from './components/User'

export const UserContext = createContext()


function App() {

  return (
    <div className='app'>
      <UserContext.Provider value='James Bond' >

        <User />


      </UserContext.Provider>

    </div>
  )
}




export default App