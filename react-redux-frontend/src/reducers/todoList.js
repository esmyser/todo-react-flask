import todo from './todo';

// updating the state from just an array of items
// to a json object like so: { items: [], isFetching: false, lastUpdated: null }
// 
const initialState = { 
    todos: [], 
    isFetching: false, 
    lastUpdated: null 
};

const todoList = (state=initialState, action) => {
    switch (action.type) {
        case 'REQUEST_TODOS':
            return Object.assign({}, state, {
                isFetching: true
            });
        case 'RECEIVE_TODOS':
            return Object.assign({}, state, {
                todos: action.todos,
                isFetching: false,
                lastUpdated: action.receivedAt
            });
        case 'ADD_TODO':
            return Object.assign({}, state, {
                todos: [...state, todo(undefined, action)],
                isFetching: false
            });
        case 'TOGGLE_TODO':
            return state.map(t => todo(t, action));
        default:
            return state;
    }
};

export default todoList;