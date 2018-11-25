import React from 'react'
import PropTypes from 'prop-types'

import './star.css'

const Star = ({half = false}) => {
    return (
        half ?
        <span className="star"><i className="fas fa-star-half-alt"></i></span>
        :
        <span className="star"><i className="fas fa-star"></i></span>
    )
}

Star.propTypes = {
    half: PropTypes.bool
}

export default Star