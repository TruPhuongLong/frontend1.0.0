import React from 'react'

import './review.css'
import Star from '../core/star'
import LiIcon from './li.icon'

export default ({userName, content, src}) => {
    return (
        <div className="review">
            <div className="row">
                <div className="col-6">
                    <LiIcon icon="fas fa-tags" label={userName} />
                </div>
                <div className="col-6">
                    <span><Star /><Star /><Star /><Star /><Star /></span>
                </div>
            </div>
            <div className="review-container">
                <img src={src} alt="review Image"/>
                <p className="center">{content}</p>
            </div>
        </div>
    )
}