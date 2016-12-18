import React from 'react';
import { connect } from 'react-redux';

let Todo = ({ onClick, completed, text }) => (
    <li 
        onClick={onClick}
        style={{textDecoration: completed ? 'line-through' : 'none'}}> 
        {text} 
    </li>
)

Todo = connect()(Todo);

export default Todo;