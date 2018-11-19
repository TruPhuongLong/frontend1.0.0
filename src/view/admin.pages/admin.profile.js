import React from 'react';
import { connect } from "react-redux";
import { isEmail } from 'validator';
import 'bootstrap/dist/css/bootstrap.min.css';

import './styles.css'
import {editAdminAction} from '../../redux/actions/user.action';
import {dispatchWithLoading} from '../../libs/funcHelp'
import AdminHeader from '../components/admin.header'
import {Field} from '../components/core/field'

class AdminProfile extends React.Component {

    state = {
        fields: {
            email: this.props.email,
            password: '',
            rePassword: '',
        },
        fieldErrors: {}
    }

    resetState = () => {
        this.setState({
            fields: {
                email: this.props.email,
                password: '',
                rePassword: '',
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

    styles = {
        leftCol: {
            verticalAlign: 'top',
        }
    }

    onSubmit = (event) => {
        event.preventDefault();
        const {email, password} = this.state.fields;
        const model = this.props.email === email ? {password} : {email, password}
        this.props.editAdmin(this.props._id, model)
            .then(_ => {
                if(!this.cancel) this.resetState()
            })
    }

    componentWillUnmount(){
        this.cancel = true
    }


    render(){
        const { email, password, rePassword } = this.state.fields;
        const { fieldErrors } = this.state;
        return (
            <div className="admin-container">
                <div className="container">
                    <AdminHeader /><br />

                    <form className="form-horizontal" onSubmit={this.onSubmit}>

                        <div className="form-group" >
                            <div className="col-sm-2" style={this.styles.leftCol}>
                                <label> Email: </label>
                            </div>
                            <div className="col-sm-10">
                                <Field type="email"
                                    placeholder="@email"
                                    className="form-control"
                                    name="email"
                                    value={email}
                                    onChange={this.onInputChanged}
                                    validates={[
                                        (val) => isEmail(val) ? null : 'email invalid'
                                    ]}
                                />
                            </div>
                        </div>

                        <div className="form-group" >
                            <div className="col-sm-2" style={this.styles.leftCol}>
                                <label>New Password: </label>
                            </div>
                            <div className="col-sm-10" >
                                <Field type="password"
                                    placeholder="@password"
                                    className="form-control"
                                    name="password"
                                    value={password}
                                    onChange={this.onInputChanged}
                                    validates={[
                                        (val) => val.length >= 6 ? null : 'password must atleast 6 character'
                                    ]}
                                />
                            </div>
                        </div>

                        <div className="form-group" >
                            <div className="col-sm-2" style={this.styles.leftCol}>
                                <label>Repeat Password: </label>
                            </div>
                            <div className="col-sm-10" >
                                <Field type="password"
                                    placeholder="@password"
                                    className="form-control"
                                    name="rePassword"
                                    value={rePassword}
                                    onChange={this.onInputChanged}
                                    validates={[
                                        (val) => val == password ? null : 'repeat password not the same'
                                    ]}
                                />
                            </div>
                        </div>

                        <div className="form-group" >
                            <div className="col-sm-2"></div>
                            <div className="col-sm-10" style={{ textAlign: 'left' }}>
                                <button type="submit" className="btn btn-primary" disabled={Object.keys(fieldErrors).length}>Submit</button>
                            </div>
                        </div>

                    </form>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    const {_id, email} = state.authState.user;
    return {_id, email}
}

const mapDispatchToProps = (dispatch) => {
    return {
        editAdmin: (userId, model) => {
            return dispatchWithLoading(dispatch, editAdminAction(userId, model))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AdminProfile)

