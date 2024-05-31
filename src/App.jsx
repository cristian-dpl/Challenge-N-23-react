import { useState } from 'react'
import TaskForm from './TaskForm'
import TaskList from './TaskList'

// punto 3
function App() {
  const [tasks, setTasks] = useState([])
  const addTask = (text) => {
    const newTask = {
      id: Date.now(),
      text,
    };
    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  const deleteTask = (id) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  return (
    <>
    <div className="App">
      <h1>Lista de Tareas</h1>
      <TaskForm addTask={addTask} />
      <TaskList tasks={tasks} deleteTask={deleteTask} />
    </div>
    </>
  )
}

export default App
