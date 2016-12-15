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

export default todo;