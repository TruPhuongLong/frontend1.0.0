import React from 'react'

import './hr.css'

export default ({title}) => {
    return (
        <div className="row">
            <div className="col-md-10 col-md-offset-1">
                <div className="hr">
                    <span></span>
                    <p>{title}</p>
                </div>
            </div>
        </div>
    )
}