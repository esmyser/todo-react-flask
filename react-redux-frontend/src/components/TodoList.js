import React from 'react';
import Todo from './Todo';

let TodoList = ({ todoList, onTodoClick }) => (
    <ul>
    {todoList.map(todo => 
        <Todo key={todo.id} {...todo} onClick={() => onTodoClick(todo.id)} />
    )}
    </ul>
)

export default TodoList;