import React, { useState } from "react";

function TodoForm({onAddTask}) {
    const [taskText, setTaskText] = useState('');

    const handleSubmit = (e)=>{
        e.preventDefault();//Previene que la pagina se cargue vacia
        if (taskText.trim()){//Revisa que el texto no este vacio
            onAddTask(taskText);//Llamando a la funcion padre
            setTaskText('');
        }
        console.log('Añadiendo tarea:', taskText);
    };
    return(
        <form onSubmit={handleSubmit}>
            <input
            type="text"
            placeholder="Añadir nueva tarea"
            value={taskText}
            onChange={(e)=> setTaskText(e.target.value)}
            />
            <button type="submit">+ Añadir tarea</button>

        </form>
    );
}

export default TodoForm;