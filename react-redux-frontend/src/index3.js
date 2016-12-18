import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';

// Reducer for Todo
const todo = (state, action) => {
    console.log('in todo');
    console.log(state);
    console.log(action);
    switch (action.type) { 
        case 'ADD_TODO':
            return {
                id: action.id,
                text: action.text,
                completed: false
            };
        case 'TOGGLE_TODO':
            if (state.id !== action.id) {
                return state;
            }
            return { ...state, completed: !state.completed };
        default:
            return state;
    }
};

// Reducer for todoList
const todoList = (state=[], action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return [...state, todo(undefined, action)];
        case 'TOGGLE_TODO':
            return state.map(t => todo(t, action));
        default:
            return state;
    }
};

// component for Todo
const Todo = ({ onClick, completed, text }) => (
    <li 
        onClick={onClick}
        style={{textDecoration: completed ? 'line-through' : 'none'}}> 
        {text} 
    </li>
)

// component for TodoList
const TodoList = ({ todoList, onTodoClick }) => (
    <ul>
    {todoList.map(todo => 
        <Todo key={todo.id} {...todo} onClick={() => onTodoClick(todo.id)} />
    )}
    </ul>
)

// Container for AddTodo
const AddTodo = ({ onAddClick }) => {
    let input;
    return (
        <div>
            <input ref={node => { input = node; }} />
            <button onClick={() => {
                if (!input.value.length){
                    return;
                }
                onAddClick(input.value);
                input.value = '';
            }}>Add Todo</button>
        </div>
    )
}

// TodoApp Container
let nextTodoId = 0;

const TodoApp = ({ todoList }) => (
    <div>
        <AddTodo 
            onAddClick={text =>
                store.dispatch({
                    type: 'ADD_TODO',
                    text: text,
                    id: nextTodoId++
                })
            } 
        />
        <TodoList 
            todoList={todoList} 
            onTodoClick={id => 
                store.dispatch({
                    type: 'TOGGLE_TODO',
                    id: id
                })
            }
        />
    </div>
)

// Store
const store = createStore(todoList);

const render = () => (
    ReactDOM.render(
        <div> 
            <TodoApp todoList={store.getState()} />
        </div>,
        document.getElementById('root')
    )
);

store.subscribe(render);
render();