import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';


import { Field } from './core/field'

const PriceOnRange = ({ min, max, price, onClickDelete, onInputRangeChanged }) => {
    return (
        <div className="row" style={{ padding: '10px 0px', margin: '0px' }}>
            <div className="col-sm-3">
                <Field type="number"
                    placeholder="@min quantity"
                    className="form-control"
                    name="min"
                    value={min}
                    onChange={onInputRangeChanged}
                    validates={[
                        (val) => val ? null : 'min quantity require'
                    ]}
                />
            </div>
            <div className="col-sm-3">
                <Field type="number"
                    placeholder="@max quantity"
                    className="form-control"
                    name="max"
                    value={max}
                    onChange={onInputRangeChanged}
                    validates={[
                        (val) => val ? null : 'max quantity require'
                    ]}
                />
            </div>
            <div className="col-sm-3">
                <Field type="number"
                    placeholder="@price on range"
                    className="form-control"
                    name="price"
                    value={price}
                    onChange={onInputRangeChanged}
                    validates={[
                        (val) => val ? null : 'price on range require'
                    ]}
                />
            </div>
            <div className="col-sm-3">
                <button className="btn btn-danger" onClick={onClickDelete}>Delete</button>
            </div>
        </div>
    )
}

export default PriceOnRange