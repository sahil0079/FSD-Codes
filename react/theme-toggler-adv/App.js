import React, { useContext } from 'react'
import './App.css'
import { ThemeContext } from './context/theme-context'

function App() {

  const { theme, toggle, dark } = useContext(ThemeContext)

  console.log(dark)
  return (
    <div className='app'>
      <h1>Theme Toggler</h1>

      <div onClick={toggle}
        className='app-header'

        style={{
          backgroundColor: theme.backgroundColor,
          color: theme.color
        }}

      >
        <h1>Context API Theme Toggler</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed elementum lacus sit amet augue mattis, nec efficitur tellus accumsan. Phasellus elit nisi, finibus at felis eget, vehicula pretium nibh. Phasellus vulputate sodales eros et dignissim. Aenean diam sapien, dictum at metus ut, volutpat blandit lectus. Ut quam lacus, laoreet   </p>
        <div className='button-container'>
          {`Toggle to ${!dark ? 'Dark' : 'Light'} theme`}
        </div>
      </div>
    </div>
  )
}

export default App