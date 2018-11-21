import React from 'react'
import socket from '../../services/socketIO.service'
import {URL_CAMPAIGNS} from '../../libs/constant'
import axios from 'axios';

export const AdminCampaign = () => {
    socket.on('server-to-client', data => {
        console.log(data)
    })

    const send = (mes) => {
        socket.emit('client-to-server', mes || "hi server");
    }

    const getCampaign = () => {
        axios.get(URL_CAMPAIGNS)
            .then(docs => {
                console.log(docs.data)
            })
    }

    return (
        <div>
            <h1>AdminCampaign</h1>
            <div>
                <button onClick={() => send()}>Send</button>
                <button onClick={getCampaign}>get campaign</button>
            </div>
        </div>
    )
}