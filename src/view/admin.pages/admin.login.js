import React from 'react';
import { connect } from "react-redux";
import 'bootstrap/dist/css/bootstrap.min.css';

import './styles.css'
import {LoginForm} from '../components/login-form';
import {loginAdminAction} from '../../redux/actions/user.action';
import {dispatchWithLoading} from '../../libs/funcHelp'
import LoadingHOC from '../HOC/loadingHOC';

class AdminLogin extends React.Component {

    onSubmit = (model) => {
        console.log('=== login')
        this.props.login(model)
    }

    render(){
        return (
            <div className="admin-container">
                <div className="container">
                    <LoginForm onSubmit={this.onSubmit}/>
                </div>
            </div>
        )
    }
}

// const mapStateToProps = (state) => {
//     const {user} = state.authState;
//     const {isLoading} = state.statusState;
//     return {user, isLoading};
// }

const mapDispatchToProps = (dispatch) => {
    return {
        login: (model) => {
            dispatchWithLoading(dispatch, loginAdminAction(model))
        }
    }
}

export default connect(null, mapDispatchToProps)(AdminLogin)

