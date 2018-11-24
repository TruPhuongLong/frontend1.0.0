import React from 'react';
import { connect } from "react-redux";
// import 'bootstrap/dist/css/bootstrap.min.css';

import './styles.css'
import {LoginForm} from '../components/login-form';
import {loginAdminAction} from '../../redux/actions/user.action';
import {dispatchWithLoading} from '../../libs/funcHelp'
import AdminHeader from '../components/admin.header'


class AdminLogin extends React.Component {
    onSubmit = (model) => {
        return this.props.login(model)
    }

    render(){
        return (
            <div className="admin-container">
                <div className="container">
                    <AdminHeader /><br /><br /><br />
                    <LoginForm onSubmit={this.onSubmit}/>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        login: (model) => {
            console.log("=== login from admin.login.js")
            return dispatchWithLoading(dispatch, loginAdminAction(model))
        }
    }
}

export default connect(null, mapDispatchToProps)(AdminLogin)

