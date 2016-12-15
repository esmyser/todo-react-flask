import React, { PropTypes } from 'react';
import Todo from './Todo';

const TodoList = ({ todoList, onTodoClick }) => (
    <ul>
    {todoList.map(todo => 
        <Todo key={todo.id} {...todo} onClick={() => onTodoClick(todo.id)} />
    )}
    </ul>
)

TodoList.propTypes = {
    todoList: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            text: PropTypes.string.isRequired,
            onClick: PropTypes.func.isRequired
        }).isRequired
    ).isRequired
}

export default TodoList;