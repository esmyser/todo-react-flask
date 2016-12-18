import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import TodoApp from './containers/TodoApp.js';
import todoList from './reducers/todoList';

const store = createStore(todoList);

const render = () => (
    ReactDOM.render(
        <Provider store={store}> 
            <TodoApp todoList={store.getState()} />
        </Provider>,
        document.getElementById('root')
    )
);

store.subscribe(render);

render();