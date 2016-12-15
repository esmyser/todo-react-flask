const todoList = (state=[], action) => {
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

export default todos;