import React from 'react'

import './product.ingredient.css'

export default ({nameVn, nameEn, src, content}) => {
    return (
        <div className="product-ingredient">
            <div className="name">
                <h3>{nameVn} <br/>{nameEn}</h3>
                <span><i className="fas fa-ellipsis-h"></i></span>
            </div>
            <div className="img">
                <img src={src} alt=""/>
            </div>
            <div className="cntn">
                <p>{content}</p>
            </div>
        </div>
    )
}