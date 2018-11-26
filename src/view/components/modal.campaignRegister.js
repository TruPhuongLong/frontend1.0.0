import React from 'react'

import './modal.campaignRegister.css'

export default class Modal extends React.Component {

    hideModal = () => {
        this.props.onHideModal();
    }

    onSubmit = (event) => {
        event.preventDefault()
        this.props.onSubmit(this.state)
    }

    render(){
        return (
            <div className="modal-campaign-register">
                modal
                <h1>modal</h1>
            </div>
        )
    }
}