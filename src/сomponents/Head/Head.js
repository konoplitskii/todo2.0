import React from 'react';
import TaskListIcon from "../../icons/TaskListIcon";

import './Head.scss';

const Head = () => {
    return (
        <div className="Head">
            <h2 className="HeadTitle">Task List</h2>
            <TaskListIcon customClass="HeadIcon"/>
        </div>
    );
};

export default Head;