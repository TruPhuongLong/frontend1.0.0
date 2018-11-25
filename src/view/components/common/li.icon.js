import React from 'react'
import PropTypes from 'prop-types'

import './li.icon.css'

const LiIcon = ({icon = "fas fa-dot-circle", label, content}) => {
    const iconSrc = typeof icon === 'string' ? icon : icon.src
    const iconStyle = typeof icon === 'string' ? {} : icon
    const _content = typeof content === 'string' ?
        <span style={{color: '#01579b'}}>{content}</span>
        :
        content
    const _label = content ? label + ':' : label
    return (
        <div className="li-icon">
            <span><i className={iconSrc} style={iconStyle}></i></span>
            <p>{_label} {_content}</p>
        </div>
    )
}

LiIcon.propTypes = {
    icon: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.object
    ]),
    label: PropTypes.string.isRequired,
    content: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.element
    ]),
}

export default LiIcon