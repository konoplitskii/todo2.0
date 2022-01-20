import React from 'react';
import './TodoList.scss';
import TodoItem from "../TodoItem/TodoItem";


const TodoList = () => {
    return (
        <ul className="TodoList">
            <TodoItem status="completed"/>
            <TodoItem status="edit"/>
            <TodoItem/>
        </ul>
    );
};

export default TodoList;