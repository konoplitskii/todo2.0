import React from 'react';
import TaskListIcon from "../../icons/TaskListIcon";

import './Head.scss';
import {useDispatch, useSelector} from "react-redux";

const Head = () => {
    const dispatch = useDispatch();
    const todos = useSelector(state=> state.todos.todose)
    return (
        <div className="Head">
            <h2 className="HeadTitle">{todos}</h2>
            <TaskListIcon customClass="HeadIcon"/>
        </div>
    );
};

export default Head;