import React from 'react';
import './Filter.scss';
import Label from "../Label/Label";

const Filter = () => {
    return (
        <div className="Filter">
            <Label type="Active" label="Active"/>
            <Label type="Completed" label="Completed"/>
        </div>
    );
};

export default Filter;