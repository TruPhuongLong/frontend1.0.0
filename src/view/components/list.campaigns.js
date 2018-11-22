import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import moment from 'moment'

const ListCampaigns = ({ list, onClickEdit, onClickDelete }) => {
    return (
        <div className="table-responsive">
            <table className="table table-hover table-striped">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>for product</th>
                        <th>start date</th>
                        <th>end date</th>
                        <th>prices</th>
                        <th>current quantity</th>
                        <th></th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        list.map((campaign, index) => {
                            return (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{campaign.name}</td>
                                    <td>{campaign.productName}</td>
                                    <td>{campaign.startDate}</td>
                                    <td>{campaign.endDate}</td>
                                    <td>
                                        <tr>
                                            <td>min: {campaign.prices.quantity && campaign.prices.quantity.min}</td>
                                            <td >{campaign.prices.price}</td>
                                        </tr>
                                        <tr>
                                            <td>max: {campaign.prices.quantity && campaign.prices.quantity.max}</td>
                                        </tr>
                                    </td>
                                    <td>{moment(campaign.createAt).format("DD-MM-YYYY")}</td>
                                    <td>
                                        <button
                                            className="btn btn-success"
                                            onClick={() => onClickEdit(campaign)}
                                        >Edit</button>
                                    </td>
                                    <td>
                                        <button
                                            className="btn btn-danger"
                                            onClick={() => onClickDelete(campaign)}
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

export default ListCampaigns