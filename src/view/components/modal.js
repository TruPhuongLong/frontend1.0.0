import React from "react";
import { isEmail } from 'validator';

import {Field} from './core/field'

export default class Modal extends React.Component {

    initState = {
        fields: {
            name: '',
            phone: '',
            email: '',
            quantity: 1,
            totalPrice: this.props.unitPrice || 0,
        },
        fieldErrors: {}
    }

    constructor(props) {
        super(props);
        
        this.state = this.initState
    }

    increaseQuantity = () => {
        const quantity = parseInt(this.state.fields.quantity) + 1
        this.setState(state => ({
            fields: {
                ...state.fields,
                quantity,
            }
        }))
        this.calculateTotalPrice()
    };

    decreaseQuantity = () => {
        const quantity = parseInt(this.state.fields.quantity) - 1
        if (quantity <= 0) return;
        this.setState(state => ({
            fields: {
                ...state.fields,
                quantity,
            }
        }))
        this.calculateTotalPrice()
    };

    calculateTotalPrice = () => {
        const { unitPrice } = this.props;
        const totalPrice = this.state.fields.quantity * unitPrice;
        this.setState(state => ({ 
            fields: {
                ...state.fields,
                totalPrice
            }
        }))
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

    hideModal = () => {
        // this.setState({ show: false });
        this.props.onHideModal();
    }

    onSubmit = (event) => {
        event.preventDefault()
        this.props.onSubmit(this.state.fields)

        //reset
        this.setState(this.initState)
    }

    render() {
        const { name, phone, email, quantity, totalPrice } = this.state.fields;
        const {fieldErrors} = this.state
        const { unitPrice } = this.props;
        return (
            <div className={`cam-popup-wrapper show`}>
                {/* popup fill wr */}
                <div className="col-xs-10 col-sm-10 col-md-10 col-xl-10 col-xs-offset-1 col-sm-offset-1 col-md-offset-1 col-xl-offset-1 popup-fill-wr">
                    <div className="popup-fill">
                        <div className="fill-title">
                            <div className="row">
                                <div className="col-xs-12 col-sm-6 col-md-6 col-xl-6 fill-title-name">
                                    <h2>Numero 5. Vital Mask pack</h2>
                                </div>
                                <div className="col-xs-6 col-sm-6 col-md-6 col-xl-6 fill-title-info">
                                    <h2>Thông tin đăng kí</h2>
                                    <span><i className="fas fa-plus" onClick={this.hideModal}/></span>
                                </div>
                            </div>
                        </div>
                        {/* fill content */}
                        <div className="row cam-pp-if-wr">
                            {/* img fill */}
                            <div className="col-xs-12 col-sm-6 col-md-6 col-xl-6">
                                <div className="img-fill">
                                    <img src="assets/images/1(1).jpg" alt="" />
                                </div>
                            </div>
                            {/* img fill end */}
                            {/* info fill */}
                            <div className="col-xs-12 col-sm-6 col-md-6 col-xl-6 fill-title-info-mb">
                                <h2>Thông tin đăng kí</h2>
                                <span><i className="fas fa-plus" /></span>
                            </div>
                            <div className="col-xs-12 col-sm-6 col-md-6 col-xl-6 fill-info-cntn">
                                <div className="fill-element text-left">
                                    <div className="row">
                                        <div className="col-sm-5 col-md-4">
                                            <p>Khách hàng: </p>
                                        </div>
                                        <div className="col-sm-7 col-md-8">
                                            <Field type="text"
                                                placeholder="@name"
                                                className="form-control"
                                                name="name"
                                                value={name}
                                                onChange={this.onInputChanged}
                                                validates={[
                                                    (val) => val.length > 0 ? null : 'name is require'
                                                ]}
                                            />
                                        </div>
                                        
                                    </div>
                                </div>
                                <div className="fill-element text-left">
                                    <div className="row">
                                        <div className="col-sm-5 col-md-4">
                                            <p>Điện thoại: </p>
                                        </div>
                                        <div className="col-sm-7 col-md-8">
                                            <Field type="number"
                                                placeholder="@phone"
                                                className="form-control"
                                                name="phone"
                                                value={phone}
                                                onChange={this.onInputChanged}
                                                validates={[
                                                    (val) => new RegExp("(0[3|5|7|8|9]|01[2|6|8|9])[0-9]{8}\\b").test(val) ? null : 'phone is require'
                                                ]}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="fill-element text-left">
                                    <div className="row">
                                        <div className="col-sm-5 col-md-4">
                                            <p>Email: </p>
                                        </div>
                                        <div className="col-sm-7 col-md-8">
                                            <Field type="email"
                                                placeholder="@email"
                                                className="form-control"
                                                name="email"
                                                value={email}
                                                onChange={this.onInputChanged}
                                                validates={[
                                                    (val) => isEmail(val) ? null : 'email invalid'
                                                ]}
                                            />
                                        </div>
                                    </div>
                                </div>
                                {/* choose */}
                                <div className="fill-element fill-mount text-left">
                                    <div className="row">
                                        <div className="col-xs-5 col-sm-5 col-md-4 col-xl-4">
                                            <p>Số lượng: </p>
                                        </div>
                                        <div className="col-xs-7 col-sm-7 col-md-8 col-xl-8">
                                            <button className="btn fill-btn-choose" onClick={this.decreaseQuantity}> - </button>
                                            <input type="text" name="quantity" value={quantity} onChange={this.onHandleChange} />
                                            <button className="btn fill-btn-choose" onClick={this.increaseQuantity}> + </button>
                                        </div>
                                    </div>
                                </div>
                                {/* choose end */}
                                <div className="fill-element text-left fill-total">
                                    <div className="row">
                                        <div className="col-xs-5 col-sm-5 col-md-4 col-xl-4">
                                            <p>Giá hiện tại: </p>
                                        </div>
                                        <div className="col-xs-7 col-sm-7 col-md-8 col-xl-8">
                                            <span>{unitPrice}đ</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="fill-element text-left fill-total fill-current">
                                    <div className="row">
                                        <div className="col-xs-5 col-sm-5 col-md-4 col-xl-4">
                                            <p>Tổng cộng : </p>
                                        </div>
                                        <div className="col-xs-7 col-sm-7 col-md-8 col-xl-8">
                                            <span>{totalPrice}đ</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="row text-center fill-button">
                                    <div className="col-xs-6 col-sm-6 col-xs-offset-3 col-sm-offset-3 col-md-4 col-xl-4 col-md-offset-4 col-xl-offset-4 ">
                                        <button 
                                            onClick={this.onSubmit} 
                                            className="btn btn-danger"
                                            disabled={Object.keys(fieldErrors).length}
                                        >Đặt hàng</button>
                                        {/* <Button 
                                            onClick={this.onSubmit}
                                            style={disabled: {Object.keys(fieldErrors).length}}
                                        >
                                        <i className="fas fa-plus"></i> Đặt hàng</Button> */}
                                    </div>
                                </div>
                                {/* icon share */}
                                <div className="row icon-share">
                                    <div className="col-xs-12 col-sm-12 col-md-12 col-xl-12 text-center">
                                        <div className="cam-icon">
                                            <span><i className="far fa-thumbs-up" /></span>
                                            <span><i className="fas fa-share-square" /></span>
                                            <span><i className="far fa-copy" /></span>
                                        </div>
                                    </div>
                                </div>
                                {/* icon share end */}
                            </div>
                            {/* info fill end */}
                        </div>
                        {/* fill content */}
                        <div className="row">
                            <div className="col-xs-12">
                                <div className="fill-script">
                                    <a href="#"><img src="assets/images/footer-cam.jpg" alt="" /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* popup fill wr end */}
            </div>

        );
    }
}
