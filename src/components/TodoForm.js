import React, {useState} from "react";

function TodoForm({onAddTask}) {
    const [taskText, setTaskText] = useState('');

    const handleSubmit = ()=> {
        e.prevent.default();//Previene que la pagina cargue vacía
        if(taskText.trim()){//Revisa que el texto no este vacío
            onAddTask(taskText);//Llamando a la funcion padre (no definida aun)
            setTaskText('');
        }
    };
    return(
        <form onSubmit={handleSubmit}>
            <input
            type="text"
            placeholder="Añadir nueva tarea"
            value={taskText}
            onChange={(e)=>setTaskText(e.target.ariaValueMin)}
            />
            <button type="submit">Añadir tarea.</button>

        </form>
    
    );

}

export default TodoForm;