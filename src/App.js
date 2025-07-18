import React, { useState } from "react";
import './App.css';
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

function App (){
  const [tasks,setTasks] = useState([]);
  const [nextId,setNextId] = useState(1);

  const addTask = (text) => {
    const newTask = {id:nextId, text, completed: false};
    setTasks([...tasks, newTask]);//Añadir la nueva tarea al final de la lista
    setNextId(nextId + );
    
     };
     const toggleComplete = (id)=>{
      setTasks(tasks.map(task =>
        task.id === id ? {...task, completed: !task.completed}: task
      ));
     };

     const onDeleteTask = (id) => {
      setTasks(tasks.filter(task => task.id !== id));
     };

     return(
      <div className="App">
        <h1>Lista de tareas</h1>
        <TodoForm onAddTask={addTask}/>
        <TodoList
        tasks={tasks}
        onToogleComplete={toggleComplete}
        onDeleteTask={deleteTask}
        />
      </div>
     );
}

export default App;