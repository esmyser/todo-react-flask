import fetch from 'isomorphic-fetch';

let nextTodoId = 0;

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
    return function(dispatch) {
        dispatch(requestTodos(todos));
        return fetch('https://todo-react-flask.herokuapp.com/todos')
            .then(response => 
                response.json()
            ).then(json => 
                dispatch(receiveTodos(json))
            )
            // .catch(error =>
            //     dispatch(receiveError(error))
            // )
    };
}

export const addTodo = (text) => {
  return {
    type: 'ADD_TODO',
    text: text,
    id: nextTodoId++
  };
};

export const toggleTodo = (id) => {
    return {
        type: 'TOGGLE_TODO',
        id: id
    };
};