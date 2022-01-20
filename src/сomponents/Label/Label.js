import React from 'react';
import './Label.scss';

const Label = ({label= 'label',quantity= 0,callback , type}) => {
    return (
        <div onClick={callback} className={`Label ${type}`}>
            <div className="LabelName">{label}</div>
            <div className="LabelQuantity">{quantity}</div>
        </div>
    );
};

export default Label;