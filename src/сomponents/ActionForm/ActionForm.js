import React, {useState} from 'react';
import './ActionForm.scss';
import Button from "../Button/Button";
import Field from "../Field/Field";

const ActionForm = () => {
    const [stateActionForm, setStateActionForm] = useState('');

    const changeStateActionForm = (value)=> {
        setStateActionForm(value);
    }

    const addData = ()=> {
        console.log(stateActionForm)
    }

    return (
        <div className="ActionForm">
            {console.log('stateActionForm',stateActionForm)}
            <Field onchangeCallback={(value)=> changeStateActionForm(value)}/>
            <Button onClick={addData} text="Add task"/>
        </div>
    );
};

export default ActionForm;