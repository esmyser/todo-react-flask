import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions/todos.js';

let nextTodoId = 0;

let AddTodo = ({ todoList }) => (
    <div>
        <input ref={node => { todoList.input = node; }} />
        <button onClick={() => {
            if (!todoList.input.value.length){
                return;
            }
            store.dispatch({
                type: 'ADD_TODO',
                text: todoList.input.value,
                id: nextTodoId++
            });
            todoList.input.value = '';
        }}>Add Todo</button>
    </div>
)

AddTodo = connect()(AddTodo);

export default AddTodo;