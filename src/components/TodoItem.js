import React from "react";

function TodoItem({task,onToogleComplete,onDeleteTask}){
    return(
        <li style={{textDecoration: task.completed ? 'line-through' : 'none' }}>
            {task.text}
            <button onClick={()=> onToogleComplete(task.id)} style={{textDecoration: task.completed ? 'line-through' : 'none' }}>
                {task.completed ? 'Deshacer':'Completar'}
            </button>
            <button onClick={()=>onDeleteTask(task.id)} class="eliminar" style={{textDecoration: task.completed ? 'line-through' : 'none' }}>Eliminar</button>
        </li>
    );
}

export default TodoItem;