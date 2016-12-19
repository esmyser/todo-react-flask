import fetch from 'isomorphic-fetch';
var rp = require('request-promise');

export function requestTodos(todos) { 
    return {
        type: 'REQUEST_TODOS',
        todos: todos
    };
}

export function receiveTodos(json) { 
    console.log(json);
    return {
        type: 'RECEIVE_TODOS',
        todos: json.todos.map(child => child),
        receivedAt: Date.now()
    };
}

export function fetchTodos(todos=[]) { 
    console.log("fetching todos from /actions: fetchTodos");
    return function(dispatch) {
        dispatch(requestTodos(todos));
        return fetch('http://127.0.0.1:5000/todos')
            .then(response => 
                response.json()
            ).then(json => 
                dispatch(receiveTodos(json))
            );
    };
}

export const addTodo = (todo) => {
  return {
    type: 'ADD_TODO',
    text: todo.text,
    id: todo.id,
    completed: todo.completed
  };
};

export function postTodo(text) {
    console.log("posting todo from /actions: postTodo");
    return function(dispatch) {
        return rp.post('http://127.0.0.1:5000/todos').form({ text: text })
            .then(response => 
                dispatch(addTodo(JSON.parse(response)))
            );
    };
}

export const toggleTodoAction = (id) => {
    return {
        type: 'TOGGLE_TODO',
        id: id
    };
};

export function toggleTodo(id) {
    return function(dispatch) { 
        let url = 'http://127.0.0.1:5000/todos/' + id + '/toggle';
        return rp.put(url)
            .then(response => 
                dispatch(toggleTodoAction(id))
            );
    };
}

// export function putTodo(id) { ... }

// export function receiveError(error) {
//     return {
//         type: 'RECEIVE_ERROR',
//         error: error
//     };
// }