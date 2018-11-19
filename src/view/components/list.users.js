import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import moment from 'moment'

const ListUsers = ({ list, onClickDetail }) => {
    return (
        <div className="table-responsive">
            <table className="table table-hover table-striped">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone Number</th>
                        <th>Address</th>
                        <th>Create At</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        list.map((user, index) => {
                            return (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.phoneNumber}</td>
                                    <td>{user.address}</td>
                                    <td>{moment(user.createAt).format("DD-MM-YYYY")}</td>
                                    <td>
                                        <button
                                            className="btn btn-success"
                                            onClick={() => onClickDetail(user)}
                                        >Detail</button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default ListUsers;