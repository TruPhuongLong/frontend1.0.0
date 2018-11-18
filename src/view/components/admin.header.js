import React from 'react';
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import {Link} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';

import './admin.header.css'
import {logout} from '../../services/auth.service'
import {logoutAction} from '../../redux/actions/user.action'

const AdminHeader = (props) => {
    const {isAdmin, adminLogout} = props

    const logoutOnClick = () => {
        adminLogout()
    }

    const loginOnClick = () => {
        props.history.push('/admin/login')
    }

    const profileOnClick = () => {
        props.history.push('/admin/profile')
    }

    const toogleBtn = 
        !isAdmin ? 
        <button onClick={loginOnClick}>
            <img src="/assets/icon/login.png" alt="" />
            Login
        </button>
        :
        <div>
            <button onClick={logoutOnClick}>
                <img src="/assets/icon/logout.png" alt="" />
                Logout
            </button>
            <button onClick={profileOnClick}>
                <img src="/assets/icon/profile.png" alt="" />
                Profile
            </button>
        </div>

    return (
        <div className="row admin-header">
            <div className="col-sm-3">
                <Link to="/admin/home">
                    <img src="/assets/icon/home-interface.svg" alt="" />
                </Link>
            </div>
            <div className="col-sm-6">
                <h1>{props.title || 'ADMIN'}</h1>
            </div>
            <div className="col-sm-3">
                {toogleBtn}
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    const {isAdmin, user} = state.authState;
    return {isAdmin, user};
}

const mapDispatchToProps = (dispatch) => {
    return {
        adminLogout: () => {
            //delete access token
            logout()

            //update state
            dispatch(logoutAction)
        }
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AdminHeader))