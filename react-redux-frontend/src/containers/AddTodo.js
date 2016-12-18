import React from 'react';

let AddTodo = ({ onAddClick }) => {
    let input;

    return (
        <div className="col-xs-12">
            <input 
                className="col-xs-6"
                placeholder="What do you need to do today?"
                ref={ node => { input = node; } } 
            />
            <button 
                onClick={() => {
                    if (!input.value.length){
                        return;
                    }
                    onAddClick(input.value);
                    input.value = '';
                }
            }>Add Todo</button>
        </div>
    );
};

export default AddTodo;