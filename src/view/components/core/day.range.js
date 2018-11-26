import React from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'

import './day.range.css'

const DayRange = ({start, end, style}) => {
    return (
        <h3 className="day-range" style={style}>
            {moment(start).format("DD/MM/YYYY")}
            {` - `}
            {moment(end).format("DD/MM/YYYY")}
        </h3>
    )
}

DayRange.propTypes = {
    start: PropTypes.oneOfType([
        PropTypes.instanceOf(Date),
        PropTypes.number,
        PropTypes.string
    ]),
    end: PropTypes.oneOfType([
        PropTypes.instanceOf(Date),
        PropTypes.number,
        PropTypes.string
    ])
};

export default DayRange