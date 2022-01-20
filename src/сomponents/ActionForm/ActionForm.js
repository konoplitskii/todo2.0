import React from 'react';
import './ActionForm.scss';
import Button from "../Button/Button";
import Field from "../Field/Field";

const ActionForm = () => {
    return (
        <div className="ActionForm">
            <Field/>
            <Button text="Add task"/>
        </div>
    );
};

export default ActionForm;