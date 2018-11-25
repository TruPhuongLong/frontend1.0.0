import React from 'react'

import './box.time.css'

export default ({time, style}) => {
    return (
        <span className="box-time" style={style}>{time}</span>
    )
}