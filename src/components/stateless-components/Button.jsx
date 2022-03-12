import React from 'react';
import propTypes from 'propTypes';

const Button = ({ type, onClickHandler, children }) => {
    return (
        <button type={type} onClick={onClickHandler}>
            {children}
        </button>
    );
};

Button.propTypes = {
    type: propTypes.string,
    onClickHandler: propTypes.func.isRequired,
    children: propTypes.node,
};

export default Button;
