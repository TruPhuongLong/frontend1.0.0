import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import './styles.css'
import AdminHeader from '../components/admin.header';
import {getOrdersAction, setCurrentOrderAction} from '../../redux/actions/order.action';
import {dispatchWithLoading} from '../../libs/funcHelp';
import ListOrders from '../components/list.orders';


class AdminOrders extends React.Component {

    componentDidMount(){
        //request list orders
        this.props.getOrders()
    }

    onClickDetail = (order) => {
        //save current user in global state
        this.props.setCurrentOrder(order)

        // push to detail page
        this.props.history.push('/admin/order')
    }

    render(){
        const {list} = this.props
        return (
            <div className="admin-container">
                <div className="container">
                
                    <AdminHeader title="List orders"/>

                    <ListOrders list={list} onClickDetail={this.onClickDetail} />
  
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    const {list} = state.orderState;
    return {list}
}

const mapDispatchToProps = (dispatch) => {
    return {
        getOrders: (query) => {
            return dispatchWithLoading(dispatch, getOrdersAction(query))
        },
        setCurrentOrder: (order) => {
            return dispatch(setCurrentOrderAction(order))
        }
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AdminOrders))