import React from 'react'
import { Provider } from 'react-redux'
import './App.css'

import Calendar from './components/Calendar/Calendar'
import store from './store/store'

function App() {




  return (
    <div className='app'>
      <Provider store={store}>

        <Calendar />

      </Provider>


    </div>
  )
}

export default App