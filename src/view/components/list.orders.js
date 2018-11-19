import React from 'react'
import moment from 'moment'
import 'bootstrap/dist/css/bootstrap.min.css';


const ListOrders = ({ list, onClickDetail }) => {
    return (
        <div className="table-responsive">
            <table className="table table-hover table-striped">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>how many kind of product</th>
                        <th>user email</th>
                        <th>price Ship</th>
                        <th>price Total</th>
                        <th>Create At</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        list.map((order, index) => {
                            return (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{order.listOrder.length}</td>
                                    <td>{order.userEmail}</td>
                                    <td>{order.priceShip}</td>
                                    <td>{order.priceTotal}</td>
                                    <td>{moment(order.createAt).format("DD-MM-YYYY")}</td>
                                    <td>
                                        <button
                                            className="btn btn-success"
                                            onClick={() => onClickDetail(order)}
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

export default ListOrders;