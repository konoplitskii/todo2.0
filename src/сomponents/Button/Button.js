import React from 'react';
import './Button.scss';

const Button = ({text,icon}) => {
    return (
        <button className="Button">{text}</button>
    );
};

export default Button;