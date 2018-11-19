import React from 'react'
import {connect} from 'react-redux'

import AdminHeader from '../components/admin.header'

const AdminOrder = ({current}) => {
    return (
        <div>
            <AdminHeader title="List orders" />
            {JSON.stringify(current)}
        </div>
    )
}

const mapStateToProps = state => {
    const {current} = state.orderState
    return {current}
}

const mapDispatchToProps = dispatch => {
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AdminOrder)