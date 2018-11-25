import React from 'react'

import './hr.css'

export default ({title}) => {
    return (
        <div class="row">
            <div class="col-md-10 col-md-offset-1">
                <div class="hr">
                    <span></span>
                    <p>{title}</p>
                </div>
            </div>
        </div>
    )
}