import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';

import './styles.css'
import AdminHeader from '../components/admin.header';
import {getAdminsAction, deleteAdminAction, setCurrentUserAction} from '../../redux/actions/user.action';
import {dispatchWithLoading} from '../../libs/funcHelp';


class AdminSecondaries extends React.Component {

    componentDidMount(){
        //request list secondaries
        this.props.getAdmins()
    }

    onClickDeleteAdmin = (userEmail) => {
        const {deleteAdmin, getAdmins} = this.props;
        deleteAdmin(userEmail)
            .then(_ => getAdmins())
    }

    pustSendEmailScreen = (user) => {
        const {history, setCurrentUser} = this.props
        //set current user: !importance
        setCurrentUser(user)

        // push to screen send mailg
        history.push('/admin/sendEmail')
    }

    render(){
        const {list} = this.props
        return (
            <div className="admin-container">
                <div className="container">
                    <AdminHeader title="List admin secondaries"/>
  
                    <div className="table-responsive">          
                        <table className="table table-hover table-striped">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Email</th>
                                    <th>Delete</th>
                                    <th>Send Email</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    list.map((user, index) => {
                                        return (
                                            <tr key={index}>
                                                <td>{index + 1}</td>
                                                <td>{user.email}</td>
                                                <td>
                                                    <button 
                                                        className="btn btn-danger"
                                                        onClick={() => this.onClickDeleteAdmin(user.email)}
                                                    >Delete</button>
                                                </td>
                                                <td>
                                                    <button 
                                                        className="btn btn-success"
                                                        onClick={() => this.pustSendEmailScreen(user)}
                                                    >Send Email</button>
                                                </td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    const {list} = state.userState;
    return {list}
}

const mapDispatchToProps = (dispatch) => {
    return {
        getAdmins: (query) => {
            return dispatchWithLoading(dispatch, getAdminsAction(query))
        },
        deleteAdmin: (userEmail) => {
            return dispatchWithLoading(dispatch, deleteAdminAction(userEmail))
        },
        setCurrentUser: (user) => {
            return dispatch(setCurrentUserAction(user))
        }
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AdminSecondaries))