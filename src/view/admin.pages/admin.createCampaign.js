import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';

import './styles.css'
import AdminHeader from '../components/admin.header';
import { Field } from '../components/core/field'
import PriceOnRange from '../components/admin.priceOnRange'
import {createCampaignAction} from '../../redux/actions/campagn.action'
import {dispatchWithLoading} from '../../libs/funcHelp'


class AdminCreateCampaign extends React.Component {

    state = {
        fields: {
            name: '',
            startDate: undefined,
            endDate: undefined,
            prices: [
                {
                    quantity: {
                        min: undefined,
                        max: undefined
                    },
                    price: undefined
                }
            ],
            currentQuantity: 0,
        },
        fieldErrors: {
            name: undefined,
            startDate: undefined,
            endDate: undefined,
            prices: [
                {
                    quantity: {
                        min: undefined,
                        max: undefined
                    },
                    price: undefined
                }
            ]
        }
    }

    onInputChanged = ({ name, value, errors }) => {
        const { fields, fieldErrors } = this.state;
        fields[name] = value;
        if (errors) {
            fieldErrors[name] = errors;
        } else {
            delete fieldErrors[name];
        }
        this.setState({ fields, fieldErrors })
    }

    onInputRangeChanged = ({ index, name, value, errors }) => {
        const { fieldErrors, fields} = this.state

        // check value
        const priceValue = [...fields.prices];
        if(name === 'price'){
            priceValue[index][name] = value
        }else{
            priceValue[index]['quantity'] = priceValue[index]['quantity'] || {}
            priceValue[index]['quantity'][name] = value
        }

        //check error
        const priceError = [...fieldErrors.prices]
        if (errors) {
            // fieldErrors.prices = prices
            if(name === 'price'){
                priceError[index][name] = errors
            }else{
                priceError[index]['quantity'] = priceError[index]['quantity'] || {}
                priceError[index]['quantity'][name] = errors
            }
        } else {
            if(name === 'price'){
                delete priceError[index][name]
            }else{
                priceError[index]['quantity'] = priceError[index]['quantity'] || {}
                delete priceError[index]['quantity'][name]
            }
        }
        this.setState(state => ({
            fields: {
                ...state.fields,
                prices: priceValue
            },
            fieldErrors: {
                ...state.fieldErrors,
                prices: priceError
            }
        }))
    }

    addMoreRange = (event) => {
        event.preventDefault()
        this.setState(state => ({
            fields: {
                ...state.fields,
                prices: [...state.fields.prices, {}]
            },
            fieldErrors: {
                ...state.fieldErrors,
                prices: [...state.fieldErrors.prices, {}]
            }
        }))
    }

    onClickDelete = (event, index) => {
        event.preventDefault()
        console.log('=== price before: ', this.state.fields.prices)
        const prices = this.state.fields.prices.filter((item, _index) => index !== _index)
        console.log('=== price after', prices)
        this.setState(state => ({
            fields: {
                ...state.fields,
                prices
            }
        }))
    }

    checkError = (obj) => {
        let error = false;
        // const vals = Object.keys(obj);
        for (const key in obj){
            const item = obj[key]
            console.log(item)
            if(item && item instanceof Array){
                item.forEach(item => {
                    this.checkError(item)
                })
            }else if(item && item instanceof Object){
                this.checkError(item)
            }else if(item){
                error = true
            }
        }
        return error
    }

    onSubmit = (event) => {
        event.preventDefault()
        // console.log(JSON.stringify(this.state.fields))
        // const model = {...this.state.fields, product: this.props.current._id}
        // return this.props.createCampaign(model)
        //         .then(cam => console.log(cam))


        console.log(this.checkError(this.state.fieldErrors))
    }

    render() {
        const { current } = this.props
        const { name, startDate, endDate, prices, currentQuantity } = this.state.fields
        const { fieldErrors } = this.state
        return (
            <div className="admin-container">
                <div className="container">

                    <AdminHeader title="Create Campaign" />

                    <h4>For product: {current.name}</h4>

                    <form className="form-horizontal">

                        <div className="form-group">
                            <label className="col-sm-2">Name</label>
                            <div className="col-sm-10">
                                <Field type="text"
                                    placeholder="@name"
                                    className="form-control"
                                    name="name"
                                    value={name}
                                    onChange={this.onInputChanged}
                                    validates={[
                                        (val) => val.length > 0 ? null : 'name require'
                                    ]}
                                />
                            </div>
                        </div>

                        <div className="form-group">
                            <label className="col-sm-2">Start Date</label>
                            <div className="col-sm-10">
                                <Field type="date"
                                    placeholder="@startDate"
                                    className="form-control"
                                    name="startDate"
                                    value={startDate}
                                    onChange={this.onInputChanged}
                                    validates={[
                                        (val) => val ? null : 'start date require'
                                    ]}
                                />
                            </div>
                        </div>

                        <div className="form-group">
                            <label className="col-sm-2">End Date</label>
                            <div className="col-sm-10">
                                <Field type="date"
                                    placeholder="@endDate"
                                    className="form-control"
                                    name="endDate"
                                    value={endDate}
                                    onChange={this.onInputChanged}
                                    validates={[
                                        (val) => val ? null : 'end date require'
                                    ]}
                                />
                            </div>
                        </div>

                        <div className="form-group" >
                            <label className="col-sm-2">Prices</label>
                            <div className="col-sm-10" style={{ padding: '0px', margin: '0px', textAlign: 'start'}}>
                                <button
                                    className="btn btn-success"
                                    onClick={this.addMoreRange}
                                    style={{marginLeft: '10px', marginBottom: '20px'}}
                                >Add more range</button>

                                {
                                    prices.map((item, index) => {
                                        console.log('=== prices run func map to render ui')
                                        return (
                                            <PriceOnRange
                                                key={index}
                                                {...item}
                                                onClickDelete={(event) => this.onClickDelete(event, index)}
                                                onInputRangeChanged={({ name, value, errors }) => this.onInputRangeChanged({ index, name, value, errors })}
                                            />
                                        )
                                    })
                                }
                            </div>
                        </div>

                        <div className="form-group">
                            <label className="col-sm-2">Current Quantity</label>
                            <div className="col-sm-10">
                                <Field type="number"
                                    placeholder="@current Quantity"
                                    className="form-control"
                                    name="currentQuantity"
                                    value={currentQuantity}
                                    onChange={this.onInputChanged}
                                />
                            </div>
                        </div>

                        <div className="form-group">
                            <div className="col-sm-10 col-sm-offset-2" style={{ textAlign: 'left' }}>
                                <button
                                    type="submit"
                                    className="btn btn-success"
                                    onClick={this.onSubmit}
                                    // disabled={Object.keys(fieldErrors).length}
                                >Submit</button>
                                {/* <label>have error: {this.checkError(this.state.fieldErrors)}</label> */}
                            </div>
                        </div>

                    </form>

                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    const { current } = state.productState
    return { current }
}

const mapDispatchToProps = (dispatch) => {
    return {
        createCampaign: (model) => {
            return dispatchWithLoading(dispatch, createCampaignAction(model))
        }
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AdminCreateCampaign));
