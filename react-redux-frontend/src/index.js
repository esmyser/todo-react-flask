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

// Reducer for Todos
const todos = (state=[], action) => {
    switch (action.type) {
        case 'ADD_TODO':
            console.log('in todos');
            return [...state, todo(undefined, action)];
        case 'TOGGLE_TODO':
            return state.map(t => todo(t, action));
        default:
            return state;
    }
};

// Store
const store = createStore(todos);

const Todo = ({ onClick, completed, text }) => (
    <li 
        onClick={onClick}
        style={{textDecoration: completed ? 'line-through' : 'none'}}> 
        {text} 
    </li>
)

const TodoList = ({ todos, onTodoClick }) => (
    <ul>
    {todos.map(todo => 
        <Todo key={todo.id} {...todo} onClick={() => onTodoClick(todo.id)} />
    )}
    </ul>
)

let nextTodoId = 0;
const AddTodo = ({ todos }) => (
    <div>
        <input ref={node => { todos.input = node; }} />
        <button onClick={() => {
            store.dispatch({
                type: 'ADD_TODO',
                text: todos.input.value,
                id: nextTodoId++
            });
            todos.input.value = '';
        }}>Add Todo</button>
    </div>
)

// TodoApp Container
class TodoApp extends Component { 
    render() { 
        const { todos } = this.props
        return (
            <div>
                <AddTodo todos={todos} />
                <TodoList 
                    todos={todos} 
                    onTodoClick={id => store.dispatch({
                        type: 'TOGGLE_TODO',
                        id: id
                    })}
                />
            </div>
        );
    }
}

const render = () => {
    ReactDOM.render(
        <div> 
            <TodoApp todos={store.getState()} />
        </div>,
        document.getElementById('root')
    );
};

store.subscribe(render);
render();
