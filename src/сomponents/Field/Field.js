import React, {useState} from 'react';
import './Field.scss';

const Field = ({onchangeCallback}) => {
    const [value,setValue] = useState('');

    const getValue = (e)=> {
        setValue(e.target.value);
        if(typeof onchangeCallback === 'function' ) {
            onchangeCallback(value);
        }
    }


    return (
        <div className="FieldBox">
            <input onChange={(e)=> getValue(e)} className="Field" type="text" value={value} placeholder="Task name..." maxLength="50"/>
        </div>
    );
};

export default Field;