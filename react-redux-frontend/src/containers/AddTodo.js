import React from 'react';
import { connect } from 'react-redux';
// import { Input, Button } from 'react-bootstrap';

let AddTodo = () => {
    return (
        <div>
            <form>
                <input 
                  type='text' 
                  placeholder='What needs to be done?' />
                <button>
                  Add Todo
                </button>
            </form>
        </div>
    )
}

export default AddTodo