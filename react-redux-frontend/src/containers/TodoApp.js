import React from 'react';
import AddTodo from './AddTodo';
import TodoList from '../components/TodoList';
import { connect } from 'react-redux';
import { postTodo, toggleTodo } from '../actions/index';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

let TodoApp = ({ dispatch, todoList }) => (
    <div className="container">
        <AddTodo 
            className="row"
            onAddClick={ text => dispatch(postTodo(text)) }
        />
        <TodoList 
            className="btn btn-default"
            todoList={ todoList } 
            onTodoClick={ index => dispatch(toggleTodo(index)) }
        />
    </div>
)

TodoApp = connect()(TodoApp);

export default TodoApp;