

import { useState } from 'react'
import Header from './components/Header'
import ToDoList from './components/ToDoList'




function App() {


  const [tasks, setTasks] = useState([])
  const [inputValue, setInputValue] = useState('')



  // Add Task
  const addTask = () => {
    if (inputValue.trim() === '') return

    const newTask = {
      id: Date.now(),
      text: inputValue,
      completed: false,
    }

    setTasks([...tasks, newTask])
    setInputValue('')
  }



  // Edit Task
  const editTask = (id, updatedText) => {

    const updatedTasks = tasks.map((task) =>
      task.id === id
        ? { ...task, text: updatedText }
        : task
    )

    setTasks(updatedTasks)

  }



  // Delete Task
  const deleteTask = (id) => {
    const updatedTasks = tasks.filter((task) => task.id !== id)
    setTasks(updatedTasks)
  }



  // Toggle Complete
  const toggleComplete = (id) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id
        ? { ...task, completed: !task.completed }
        : task
    )

    setTasks(updatedTasks)
  }



  return (
    <div className="app-container">

      <div className="todo-card">

        <Header />

        <div className="input-section">

          <input
            type="text"
            placeholder="Enter a task..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          
          />

          <button onClick={addTask}>Add</button>

        </div>

        <ToDoList
          tasks={tasks}

          deleteTask={deleteTask}
          toggleComplete={toggleComplete}
          editTask={editTask}

        />

      </div>

    </div>

  )

}


export default App;