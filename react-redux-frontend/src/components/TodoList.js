import React from 'react';
import Todo from './Todo';

let TodoList = ({ todoList, onTodoClick }) => (
    <ul>
    { 
        todoList.todos.map((todo, index) => 
            <Todo key={ todo.id } { ...todo } onClick={ () => onTodoClick(index) } />
        ) 
    }
    </ul>
)

export default TodoList;