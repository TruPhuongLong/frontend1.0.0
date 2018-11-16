import React from 'react';
import { Link } from 'react-router-dom';

export const ButtonElipse = ({ children, onClick = f => f, linkTo, style }) => {

    const styles = {
        button: {
            display: 'inline-block',
            textAlign: 'center',
            width: '180px',
            height: '60px',
            lineHeight: '60px',
            fontSize: '14px',
            borderRadius: '40px',
            fontWeight: 'bold',
            color: '#4a4a4a',
            border: 'none',
            ...style
        }
    }

    if (linkTo) {
        return (
            <Link to={linkTo}>
                <button style={styles.button} >
                    {children}
                </button>
            </Link>
        )
    } else {
        return (
            <button style={styles.button} onClick={onClick}>
                {children}
            </button>
        )
    }
}
