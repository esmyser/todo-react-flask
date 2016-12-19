const todo = (state, action) => {
    switch (action.type) { 
        case 'ADD_TODO':
            return {
                id: action.id,
                text: action.text,
                completed: action.completed
            };
        case 'TOGGLE_TODO':
            if (state.id !== action.id) {
                console.log("the state: ", state);
                console.log("the action: ", action);
                return state;
            }
            return { ...state, completed: !state.completed };
        default:
            return state;
    }
};

export default todo;