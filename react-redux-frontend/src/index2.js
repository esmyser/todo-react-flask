// To replace index.js once I get props sending down the tree
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './reducers/todoList';
import App from './containers/App';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

let store = createStore(reducer);

const render = () => {
    ReactDOM.render(
        <Provider store={store} > 
            <App todoList={store.getState()} />
        </Provider>,
        document.getElementById('root')
    );
};

store.subscribe(render);
render();