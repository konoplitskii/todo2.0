import React from 'react';
import './Field.scss';

const Field = () => {
    return (
        <div className="FieldBox">
            <input className="Field" type="text" placeholder="Task name..." maxLength="50"/>
        </div>
    );
};

export default Field;