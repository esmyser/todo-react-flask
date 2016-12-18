import fetch from 'isomorphic-fetch';
var rp = require('request-promise');

export function requestTodos(todos) { 
    return {
        type: 'REQUEST_TODOS',
        todos: todos
    };
}

export function receiveTodos(json) { 
    return {
        type: 'RECEIVE_TODOS',
        todos: json.data.children.map(child => child.data),
        receivedAt: Date.now()
    };
}

// export function receiveError(error) {
//     return {
//         type: 'RECEIVE_ERROR',
//         error: error
//     };
// }

export function fetchTodos(todos) { 
    console.log("fetching todos from /actions: fetchTodos");
    return function(dispatch) {
        dispatch(requestTodos(todos));
        return fetch('http://todo-react-flask.herokuapp.com/todos')
            .then(response => 
                response.json()
            ).then(json => 
                dispatch(receiveTodos(json))
            );
            // .catch(error =>
            //     dispatch(receiveError(error))
            // )
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
        dispatch(addTodo(text));
        return rp.post('http://todo-react-flask.herokuapp.com/todos').form({ text: text })
            .then(response => 
                response.json()
            ).then(json => 
                dispatch(addTodo(json))
            );
            // .catch(error =>
            //     dispatch(receiveError(error))
            // )
    };
}

export const toggleTodo = (id) => {
    return {
        type: 'TOGGLE_TODO',
        id: id
    };
};