import React from 'react';

import './image.css'

export const Image = ({ src, index, remove = f => f }) => {

    const onRemove = (e) => {
        e.preventDefault();
        remove(index)
    }

    return (
        <div className="tpl-image-container">
            <div>
                <img src={src} alt={index} />
            </div>
            <button onClick={onRemove} >Remove</button>
        </div>
    )
}
