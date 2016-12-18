import todo from './todo';

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
            console.log("in RECEIVE_TODOS action: ", action);
            return Object.assign({}, state, {
                todos: action.todos,
                isFetching: false,
                lastUpdated: action.receivedAt
            });
        case 'ADD_TODO':
            return Object.assign({}, state, {
                todos: [ ...state.todos, todo(undefined, action) ],
                isFetching: false
            });
        case 'TOGGLE_TODO':
            return Object.assign({}, state, {
                todos: state.todos.map(t => todo(t, action)),
                isFetching: false
            });
        default:
            return state;
    }
};

export default todoList;
