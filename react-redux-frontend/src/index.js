import React from 'react';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { fetchTodos } from './actions/index';
import TodoApp from './containers/TodoApp';
import todoList from './reducers/todoList';


const middleware = [thunk];

const store = createStore(
    todoList,
    applyMiddleware(...middleware)
);

const render = () => (
    ReactDOM.render(
        <Provider store={ store }> 
            <TodoApp todoList={ store.getState() } />
        </Provider>,
        document.getElementById('root')
    )
);

store.subscribe(render);

render();

store.dispatch(fetchTodos()).then(() =>
  console.log(store.getState())
)
