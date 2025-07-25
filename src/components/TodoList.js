import React from "react";
import TodoItem from "./TodoItem";

function TodoList({ tasks, onToogleComplete, onDeleteTask}){
    return(
        <ul>
            {tasks.map(task =>(
                <TodoItem
                key={task.id}
                task={task}
                onToogleComplete={onToogleComplete}
                onDeleteTask={onDeleteTask}
                />
            ))}
        </ul>
    );
}

export default TodoList;
