import React from 'react';
import Todo from './Todo';
import { connect } from 'react-redux';

let TodoList = ({ todoList, onTodoClick }) => (
    <ul>
    {todoList.map(todo => 
        <Todo key={todo.id} {...todo} onClick={() => onTodoClick(todo.id)} />
    )}
    </ul>
)

TodoList = connect()(TodoList);

export default TodoList;