import React, { useState } from 'react'
import './App.css'

function App() {

  const [todoText, setTodoText] = useState('')
  const [todoList, setTodoList] = useState([])


  console.log(todoList)
  const handleChange = (event) => {

    setTodoText(event.target.value)
  }
  const handleSubmit = (event) => {
    event.preventDefault()

    let newTodoList = [...todoList]

    newTodoList.push(todoText)
    setTodoList(newTodoList)
    // setTodoList((prevTodoList) => [...prevTodoList, todoText])




  }
  return (
    <div className='app'>
      <div className='app-header'>
        <h1>TO DO</h1>
      </div>
      <form onSubmit={handleSubmit}>
        <label className='todoLabel'>What do you want to do today?</label>
        <br />
        <input onChange={handleChange} value={todoText} className='input' type='text' />
        <button className='button'>Submit</button>
      </form>
      {
        todoList.map((todo, index) => (

          todo !== '' && (

            <div className='todo'>
              <input type='checkbox' />
              <h4> {todo} </h4>
              <button>Delete</button>

            </div>
          )


        )
        )
      }
    </div>
  )
}

export default App