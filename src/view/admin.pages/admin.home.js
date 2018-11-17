import React from 'react';
import { connect } from "react-redux";
import 'bootstrap/dist/css/bootstrap.min.css';

import './styles.css'
import {ButtonElipse} from '../components/core/button-elipse';

const AdminHome = () => {
    return (
        <div className="admin-container">
            <div className="container">
                <h1>Admin Home</h1>
                <ButtonElipse>
                    Post New Product
                </ButtonElipse>
            </div>
        </div>
    )
}

export default connect()(AdminHome);