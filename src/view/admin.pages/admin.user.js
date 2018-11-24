import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';


import './styles.css'
import AdminHeader from '../components/admin.header';
import ListOrders from '../components/list.orders'

const AdminUser = ({ current, history, list }) => {

    const pushToSendEmailScreen = (event) => {
        event.preventDefault()

        // push to screen send mailg
        history.push('/admin/sendEmail')
    }

    const onClickDetail = event => {

    }



    return (
        <div className="admin-container">
            <div className="container">

                <AdminHeader title="User Detail" />

                <button className="btn btn-success" onClick={pushToSendEmailScreen}>Send Email</button>


                <div className="user-info">
                    <div className="row">
                        <div className="col-xs-3">
                            <label>Name:</label>
                        </div>
                        <div className="col-xs-9">
                            <label>{current.name}</label>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-xs-3">
                            <label>Email:</label>
                        </div>
                        <div className="col-xs-9">
                            <label>{current.email}</label>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-xs-3">
                            <label>address:</label>
                        </div>
                        <div className="col-xs-9">
                            <label>{current.address}</label>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-xs-3">
                            <label>phoneNumber:</label>
                        </div>
                        <div className="col-xs-9">
                            <label>{current.phoneNumber}</label>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-xs-3">
                            <label>role:</label>
                        </div>
                        <div className="col-xs-9">
                            <label>{current.role}</label>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-xs-3">
                            <label>create At:</label>
                        </div>
                        <div className="col-xs-9">
                            <label>{current.createAt}</label>
                        </div>
                    </div>
                </div>




                <div>
                    <h1>Order History</h1>

                    <ListOrders list={list} onClickDetail={onClickDetail} />
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    const { current } = state.userState;
    const { list } = state.orderState
    return { current, list }
}

export default withRouter(connect(mapStateToProps)(AdminUser))
