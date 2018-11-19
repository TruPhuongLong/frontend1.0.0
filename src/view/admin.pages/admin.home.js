import React from 'react';
import { connect } from "react-redux";
import 'bootstrap/dist/css/bootstrap.min.css';

import './styles.css'
import {ButtonElipse} from '../components/core/button-elipse';
import AdminHeader from  '../components/admin.header'
import {isAdminPrimary} from '../../libs/funcHelp'

const AdminHome = (props) => {

    const managerAdmin = isAdminPrimary(props.user) ?
        <div>
            <h3 className="left">Manager admin</h3>
            <div className="row">
                <div className="col-sm-6 col-md-4 col-md-offset-2">
                    <ButtonElipse
                        linkTo="/admin/signup"
                        style={{backgroundColor: 'green', color: 'white'}}
                    >
                        create new admin
                    </ButtonElipse>
                </div>
                <div className="col-sm-6 col-md-4">
                    <ButtonElipse
                        linkTo="/admin/secondaries"
                        style={{backgroundColor: 'green', color: 'white'}}
                    >
                        show list admins
                    </ButtonElipse>
                </div>
            </div>
        </div>
        : null

    return (
        <div className="admin-container admin-home-container">
            <div className="container">
                <AdminHeader title="Home" />
                
                {managerAdmin}
                
                <h3 className="left">Manager product</h3>
                <div className="row">
                    <div className="col-sm-6 col-md-4 col-md-offset-2">
                        <ButtonElipse
                            linkTo="/admin/createProduct"
                            style={{backgroundColor: 'green', color: 'white'}}
                        >
                            create new product
                        </ButtonElipse>
                    </div>
                    <div className="col-sm-6 col-md-4">
                        <ButtonElipse
                            linkTo="/admin/products"
                            style={{backgroundColor: 'green', color: 'white'}}
                        >
                            show list products
                        </ButtonElipse>
                    </div>
                </div>

                <h3 className="left">Manager user</h3>
                <div className="row">
                    <div className="col-sm-6 col-md-4 col-md-offset-2">
                        <ButtonElipse
                            linkTo="/admin/users"
                            style={{backgroundColor: 'green', color: 'white'}}
                        >
                            show list users
                        </ButtonElipse>
                    </div>
                    <div className="col-sm-6 col-md-4">
                        <ButtonElipse
                            linkTo="/admin/orders"
                            style={{backgroundColor: 'green', color: 'white'}}
                        >
                            show list orders
                        </ButtonElipse>
                    </div>
                </div>





            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    const {isAdmin, user} = state.authState;
    return {isAdmin, user};
}

export default connect(mapStateToProps)(AdminHome);