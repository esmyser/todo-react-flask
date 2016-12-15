import React from 'react';
import AddTodo from '../containers/AddTodo';
import TodoList from './TodoList';
import Footer from './Footer';

const App = () => (
    <div>
        <AddTodo />
        <TodoList />
        <Footer />
    </div>
)

export default App;