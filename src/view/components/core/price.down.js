import React from 'react'

import './price.down.css'

export default ({price, unit}) => (
    <span className="price-down">
        {price} {unit} <i className="fas fa-arrow-down"></i>
    </span>
)