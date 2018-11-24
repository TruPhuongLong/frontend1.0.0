import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import moment from 'moment'


const ListProducts = ({ list, onClickEdit, onClickDelete, onClickCampaign }) => {
    return (
        <div className="table-responsive">
            <table className="table table-hover table-striped">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Unit</th>
                        <th>Content</th>
                        <th>Create At</th>
                        <th></th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        list.map((product, index) => {
                            return (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>
                                        <img
                                            src={product.imageUrls && (product.imageUrls[0])}
                                            alt=""
                                            style={{ width: '100px', height: '100px', objectFit: 'contain' }}
                                        />
                                    </td>
                                    <td>{product.name}</td>
                                    <td>{product.price}</td>
                                    <td>{product.unitPrice}</td>
                                    <td>{product.content}</td>
                                    <td>{moment(product.createAt).format("DD-MM-YYYY")}</td>
                                    <td>
                                        <button
                                            className="btn btn-success"
                                            onClick={() => onClickCampaign(product)}
                                        >Campaign</button>
                                    </td>
                                    <td>
                                        <button
                                            className="btn btn-success"
                                            onClick={() => onClickEdit(product)}
                                        >Edit</button>
                                    </td>
                                    <td>
                                        <button
                                            className="btn btn-danger"
                                            onClick={() => onClickDelete(product)}
                                        >Delete</button>
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

export default ListProducts