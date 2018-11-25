import React from 'react';
import { Link } from 'react-router-dom';

import './button.css'

const Button = ({ children, onClick = f => f, linkTo, style }) => {
    if (linkTo) {
        return (
            <Link to={linkTo} className="button" style={style}>
                {children}
            </Link>
        )
    } else {
        return (
            <button className="button" onClick={onClick} style={style}>
                {children}
            </button>
        )
    }
}

export default Button
