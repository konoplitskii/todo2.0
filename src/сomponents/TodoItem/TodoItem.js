import React from 'react';
import './TodoItem.scss';
import Check from "../../icons/Check";
import Edit from "../../icons/Edit";
import DeleteIcon from "../../icons/DeleteIcon";

const TodoItem = ({status}) => {
    return (
        <li className={`TodoItem ${status === 'completed' ? 'Completed' : status === "edit" ? "Edit" : null} `}>
            <div className="TodoItemAction">
                <Check/>
                <div className="TodoItemGroupAction">
                    {
                        status === "completed"
                            ? null
                            : <button className="TodoItemButton">
                                <Edit fill={status === "edit" ? "#7749F8" : "#2B4578"}/>
                              </button>
                    }
                    <button className="TodoItemButton">
                        <DeleteIcon fill={status === "completed" ? "#fff" : "#F02E2E"}/>
                    </button>
                </div>
            </div>
            {
                status === "edit"
                    ? <textarea className="TodoItemEditArea" id=""></textarea>
                    :  <div className="TodoItemContent">
                        Написать программу для windows программу для windows
                    </div>
            }
        </li>
    );
};

export default TodoItem;