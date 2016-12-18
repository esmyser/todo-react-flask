import React from 'react';
import AddTodo from './AddTodo';
import TodoList from '../components/TodoList';
import { connect } from 'react-redux';
import { addTodo, toggleTodo } from '../actions/index';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

let TodoApp = ({ dispatch, todoList }) => (
    <div className="container">
        <AddTodo 
            className="row"
            onAddClick={ text => dispatch(addTodo(text)) }
        />
        <TodoList 
            className="btn btn-default"
            todoList={ todoList } 
            onTodoClick={ id => dispatch(toggleTodo(id)) }
        />
    </div>
)

TodoApp = connect()(TodoApp);

export default TodoApp;