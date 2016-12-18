import React from 'react';
import AddTodo from './AddTodo';
import TodoList from '../components/TodoList';
import { connect } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

let nextTodoId = 0;

let TodoApp = ({ dispatch, todoList }) => (
    <div className="container">
        <AddTodo 
            className="row"
            onAddClick={text =>
                dispatch({
                    type: 'ADD_TODO',
                    text: text,
                    id: nextTodoId++
                })
            } 
        />
        <TodoList 
            className="btn btn-default"
            todoList={todoList} 
            onTodoClick={id => 
                dispatch({
                    type: 'TOGGLE_TODO',
                    id: id
                })
            }
        />
    </div>
)

TodoApp = connect()(TodoApp);

export default TodoApp;