import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';


export default class Modal extends React.Component {
    render(){
        const { confirm, title, content} = this.props
    return (
        // <!-- Modal -->

                <div className="modal-content">
                    <div className="modal-header">
                        <button type="button" className="close" data-dismiss="modal">&times;</button>
                        <h4 className="modal-title">{title || 'Message'}</h4>
                    </div>
                    <div className="modal-body">
                        <p>{content || 'Are you sure ?'}</p>
                    </div>
                    <div className="modal-footer">
                        <button 
                            type="button" 
                            className="btn btn-default" 
                            data-dismiss="modal"
                            onClick={() => confirm(false)}
                        >Cancel</button>
                        <button 
                            type="button" 
                            className="btn btn-default" 
                            data-dismiss="modal"
                            onClick={() => confirm(true)}
                        >Confirm</button>
                    </div>
                </div>

    )
    }
}