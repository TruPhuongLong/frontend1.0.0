import React from 'react'

import './price.label.css'

export default ({label, unit = 'k'}) => {
    return (
        <span className="price-label">
            {label}{unit}
        </span>
    )
}