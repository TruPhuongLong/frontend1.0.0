import React, {Fragment} from 'react'

import './time.card.css'
import BoxTime from '../core/box.time'
import SymbolDot from '../core/symbol.dot'

export default ({time}) => {
    const style = {margin: '3px'}
    const checkShow = (number) => number < 10 ? 
        <Fragment>
            <BoxTime time="0" style={style}/>
            <BoxTime time={number % 10}  style={style}/>
        </Fragment>
        : 
        <Fragment>
            <BoxTime time={Math.floor(number / 10)}  style={style}/>
            <BoxTime time={number % 10}  style={style}/>
        </Fragment>
    return (
        <ul className="time-card">
            <li>{checkShow(time.days)}</li>
            <li><SymbolDot /></li>
            <li>{checkShow(time.hours)}</li>
            <li><SymbolDot /></li>
            <li>{checkShow(time.minutes)}</li>
            <li><SymbolDot /></li>
            <li>{checkShow(time.seconds)}</li>
        </ul>
    )
}