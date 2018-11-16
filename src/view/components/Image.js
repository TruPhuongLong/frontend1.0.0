import React from 'react';

export const Image = ({ src, index, remove = f => f }) => {

    const onRemove = (e) => {
        e.preventDefault();
        remove(index)
    }

    return (
        <div style={column}>
            <img src={src} alt={index} style={{ objectFit: 'cover' }} />
            <button onClick={onRemove} style={{alignItems: 'end'}}>Remove</button>
        </div>
    )
}

const column = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: '5px',
    width: '200px',
    height: '200px',
    border: '1px solid gray',
    margin: '0px 5px'
}