import React from 'react';
import { connect } from "react-redux";
import 'bootstrap/dist/css/bootstrap.min.css';

import './styles.css'
import Button from '../components/core/button';
import AdminHeader from  '../components/admin.header'
import {isAdminPrimary} from '../../libs/funcHelp'
import {AdminCampaign} from '../components/admin.campagn'

const AdminHome = (props) => {

    const managerAdmin = isAdminPrimary(props.user) ?
        <div>
            <h3 className="left">Manager admin</h3>
            <div className="row">
                <div className="col-sm-6 col-md-4 col-md-offset-2">
                    <Button
                        linkTo="/admin/signup"
                        style={{backgroundColor: 'green', color: 'white'}}
                    >
                        create new admin
                    </Button>
                </div>
                <div className="col-sm-6 col-md-4">
                    <Button
                        linkTo="/admin/secondaries"
                        style={{backgroundColor: 'green', color: 'white'}}
                    >
                        show list admins
                    </Button>
                </div>
            </div>
        </div>
        : null

    return (
        <div className="admin-container admin-home-container">
            <div className="container">
                <AdminHeader title="Home" />

                <AdminCampaign />
                
                {managerAdmin}
                
                <h3 className="left">Manager product</h3>
                <div className="row">
                    <div className="col-sm-6 col-md-4 col-md-offset-2">
                        <Button
                            linkTo="/admin/createProduct"
                            style={{backgroundColor: 'green', color: 'white'}}
                        >
                            create new product
                        </Button>
                    </div>
                    <div className="col-sm-6 col-md-4">
                        <Button
                            linkTo="/admin/products"
                            style={{backgroundColor: 'green', color: 'white'}}
                        >
                            show list products
                        </Button>
                    </div>
                </div>

                <h3 className="left">Manager user</h3>
                <div className="row">
                    <div className="col-sm-6 col-md-4 col-md-offset-2">
                        <Button
                            linkTo="/admin/users"
                            style={{backgroundColor: 'green', color: 'white'}}
                        >
                            show list users
                        </Button>
                    </div>
                    <div className="col-sm-6 col-md-4">
                        <Button
                            linkTo="/admin/orders"
                            style={{backgroundColor: 'green', color: 'white'}}
                        >
                            show list orders
                        </Button>
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