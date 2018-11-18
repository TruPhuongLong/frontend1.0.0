import React from 'react'

import './styles.css'
import AdminHeader from '../components/admin.header';

export default () => {
    return (
        <div className="admin-container">
            <div className="container">
                <AdminHeader title="User Detail"/>
            </div>
        </div>
    )
}