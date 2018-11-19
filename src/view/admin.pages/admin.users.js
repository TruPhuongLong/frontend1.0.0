import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import './styles.css'
import AdminHeader from '../components/admin.header';
import {getUsersAction, setCurrentUserAction} from '../../redux/actions/user.action';
import {dispatchWithLoading} from '../../libs/funcHelp';
import ListUsers from '../components/list.users'


class AdminUsers extends React.Component {

    componentDidMount(){
        //request list secondaries
        this.props.getUsers()
    }

    onClickDetail = (user) => {
        //save current user in global state
        this.props.setCurrentUser(user)

        // push to detail page
        this.props.history.push('/admin/user')
    }

    render(){
        const {list} = this.props
        return (
            <div className="admin-container">
                <div className="container">
                    <AdminHeader title="List users"/>
  
                    <ListUsers list={list} onClickDetail={this.onClickDetail} />
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
        getUsers: (query) => {
            return dispatchWithLoading(dispatch, getUsersAction(query))
        },
        setCurrentUser: (user) => {
            return dispatch(setCurrentUserAction(user))
        }
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AdminUsers))