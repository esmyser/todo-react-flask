import React from 'react';

let Todo = ({ onClick, completed, text }) => (
    <li 
        className="col-xs-12"
        onClick={ onClick }
        style={{ textDecoration: completed ? 'line-through' : 'none' }}
    > 
        {text} 
    </li>
)

export default Todo;