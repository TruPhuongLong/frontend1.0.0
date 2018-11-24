import React from 'react'
import { connect } from 'react-redux'
import {withRouter} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';

import './styles.css'
import { sendEmailAction } from '../../redux/actions/user.action'
import { dispatchWithLoading } from '../../libs/funcHelp'
import { Field } from '../components/core/field'
import Textarea from '../components/core/textarea'
import AdminHeader from '../components/admin.header'

class AdminSendEmail extends React.Component {

    state = {
        fields: {
            title: '',
            message: '',
        },
        fieldErrors: {}
    }

    resetState = () => {
        this.setState({
            fields: {
                title: '',
                message: '',
            },
            fieldErrors: {}
        })
    }

    onInputChanged = ({ name, value, errors }) => {
        const { fields, fieldErrors } = this.state;
        fields[name] = value;
        if (errors) {
            fieldErrors[name] = errors;
        } else {
            delete fieldErrors[name];
        }
        this.setState({ fields, fieldErrors })
    }

    onSubmit = (event) => {
        event.preventDefault();

        const {history, sendEmail, current} = this.props
        //send email:
        sendEmail({...this.state.fields, mailTo: current.email})
            .then(_ => history.goBack())
    }

    render() {
        const { current } = this.props
        const { title, message } = this.state.fields
        const { fieldErrors } = this.state
        return (
            <div className="admin-container admin-home-container">
                <div className="container">

                    <AdminHeader title="Send Email" />

                    <p>Send to: <em>{current.email}</em></p>

                    <form className="form-horizontal" onSubmit={this.onSubmit}>

                        <div className="form-group" >
                            <div className="col-sm-2" >
                                <label> Email: </label>
                            </div>
                            <div className="col-sm-10">
                                <Field type="text"
                                    placeholder="@title"
                                    className="form-control"
                                    name="title"
                                    value={title}
                                    onChange={this.onInputChanged}
                                    validates={[
                                        (val) => val ? null : 'email is require'
                                    ]}
                                />
                            </div>
                        </div>

                        <div className="form-group" >
                            <div className="col-sm-2" >
                                <label> Message: </label>
                            </div>
                            <div className="col-sm-10" >
                                <Textarea type="text"
                                    placeholder="@message"
                                    className="form-control"
                                    name="message"
                                    value={message}
                                    onChange={this.onInputChanged}
                                    validates={[
                                        (val) => val ? null : 'message is require'
                                    ]}
                                />
                            </div>
                        </div>

                        <div className="form-group" >
                            <div className="col-sm-2"></div>
                            <div className="col-sm-10" >
                                <button
                                    className="btn btn-primary"
                                    disabled={Object.keys(fieldErrors).length}
                                    onClick={this.onSubmit}
                                >Send</button>
                            </div>
                        </div>

                    </form>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    const { current } = state.userState
    return { current }
}

const mapDispatchToProps = (dispatch) => {
    return {
        sendEmail: (model) => {
            return dispatchWithLoading(dispatch, sendEmailAction(model))
        }
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AdminSendEmail))