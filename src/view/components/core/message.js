import React from  'react';

import './message.css'

export default ({status}) => {

    const {url, message, bg} = 
    status instanceof Error 
    ? {url: '/assets/icon/fail.png', message: status.message, bg: '#fac917'} 
    : {url: '/assets/icon/success.png', message: status, bg: 'white'}

    return (
        <div className="message-container" style={{backgroundColor: bg}}>
            <img src={url} alt="" />
            <span>{message}</span>
        </div>
    )
}