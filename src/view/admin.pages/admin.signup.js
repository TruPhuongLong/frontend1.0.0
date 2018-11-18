import React from 'react';
import { connect } from "react-redux";
import 'bootstrap/dist/css/bootstrap.min.css';

import './styles.css'
import {LoginForm} from '../components/login-form';
import {signupAdminAction} from '../../redux/actions/user.action';
import {dispatchWithLoading} from '../../libs/funcHelp'
import AdminHeader from '../components/admin.header'

class AdminSignup extends React.Component {

    onSubmit = (model) => {
        console.log('=== signup new admin')
        return this.props.signup(model)
    }

    render(){
        return (
            <div className="admin-container">
                <div className="container">
                    <AdminHeader /><br />
                    <h4>Add more admin with role secondary</h4><br /><br />
                    <LoginForm onSubmit={this.onSubmit}/>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signup: (model) => {
            return dispatchWithLoading(dispatch, signupAdminAction(model))
        }
    }
}

export default connect(null, mapDispatchToProps)(AdminSignup)

