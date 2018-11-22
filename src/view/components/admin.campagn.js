import React from 'react'
import socket from '../../services/socketIO.service'
import { URL_CAMPAIGNS } from '../../libs/constant'
import axios from 'axios';

export class AdminCampaign extends React.Component {

    constructor(props) {
        super(props)

        this.input = React.createRef()

        socket.on('stc-updateCampaign', campaign => {
            console.log('=== quantity change: ', campaign.quantity)
        })
    }




    send = () => {
        const num = this.input.current.value
        const campaign = { quantity: num }
        // console.log(campaign)
        socket.emit('cts-updateCampaign', campaign);
    }

    // const getCampaign = () => {
    //     axios.get(URL_CAMPAIGNS)
    //         .then(docs => {
    //             console.log(docs.data)
    //         })
    // }

    render() {
        return (
            <div>
                <h1>AdminCampaign</h1>
                <div>
                    <input ref={this.input} />
                    <button onClick={this.send}>Send</button>
                    {/* <button onClick={getCampaign}>get campaign</button> */}
                </div>
            </div>
        )
    }

}