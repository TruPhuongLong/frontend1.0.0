import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default class Modal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            show: true,
            name: "",
            phone: "",
            email: "",
            quantity: 1,
            totalPrice: props.unitPrice,
            disabled: true,
        };
    }

    onHandleChange = (event) => {

        const { target } = event;
        const { name, value } = target;
        this.setState({ [name]: value });
    };

    increaseQuantity = () => {
        const quantity = parseInt(this.state.quantity) + 1
        this.setState({ quantity }, this.calculateTotalPrice);
    };

    decreaseQuantity = () => {

        const quantity = parseInt(this.state.quantity) - 1
        if (quantity <= 0) return;
        this.setState({ quantity }, this.calculateTotalPrice);
    };

    calculateTotalPrice = () => {
        const { unitPrice } = this.props;
        const totalPrice = this.state.quantity * unitPrice;
        this.setState({ totalPrice });
    }

    showModal = () => {
        this.setState({ show: true });
    }

    hideModal = () => {
        this.setState({ show: false });
    }

    render() {
        const { show, name, phone, email, quantity, totalPrice ,disabled} = this.state;
        const { unitPrice } = this.props;
        return (
            <div className={`cam-popup-wrapper ${show ? "show" : "hide"}`}>
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
                                        <div className="col-xs-5 col-sm-5 col-md-4 col-xl-4">
                                            <p>Khách hàng: </p>
                                        </div>
                                        <input type="text" className="col-xs-7 col-sm-7 col-md-8 col-xl-8" name="name" value={name} onChange={this.onHandleChange} />
                                    </div>
                                </div>
                                <div className="fill-element text-left">
                                    <div className="row">
                                        <div className="col-xs-5 col-sm-5 col-md-4 col-xl-4">
                                            <p>Điện thoại: </p>
                                        </div>
                                        <input type="text" className="col-xs-7 col-sm-7 col-md-8 col-xl-8" name="phone" value={phone} onChange={this.onHandleChange} />
                                    </div>
                                </div>
                                <div className="fill-element text-left">
                                    <div className="row">
                                        <div className="col-xs-5 col-sm-5 col-md-4 col-xl-4">
                                            <p>Email: </p>
                                        </div>
                                        <input type="text" className="col-xs-7 col-sm-7 col-md-8 col-xl-8" name="email" value={email} onChange={this.onHandleChange} />
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
                                        <div className={`btn btn-xs btn-sm btn-md btn-xl btn-order ${disabled?"disabled":""}`}><i className="fas fa-shopping-cart" />Đặt hàng</div>
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
