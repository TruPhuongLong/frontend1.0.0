import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { 
    
 } from '../../redux/actions/order.action';
import {OrderModel} from '../../models/order.model';

import urlIconCar from '../../assets/Icon_Car.png';
import urlProduct from '../../assets/product.jpg'

class Order extends React.Component {


    buyNow = () => {
        console.log('test')
        const newOrder = new OrderModel({});
        newOrder.user = {name: "long dep trai", email: "longbaloca@gmail.com"}
        this.props.postOrderAction(newOrder)
    }

    render() {
        return (
            <div className="order-wr">
                <div className="o-top">
                    <div className="o-breadcrum"><a href="#">Breadcreumb/Breadcreumb/Breadcreumb</a></div>
                </div>
                {/* <!-- 		Product		 --> */}
                <section className="o-contain-product">
                    <div className="o-info-product">
                        <div className="o-product-img">
                            <div className="o-car-freeship">
                                <img src={urlIconCar} alt="" className="p-iconcar" />
                            </div>
                            <img src={urlProduct} alt="" className="p-product-1" />
                        </div>
                        <div className="o-product-desc">
                            <div className="o-header-des">
                                <p>Đơn Hàng Của Bạn</p>
                                <span></span>
                                <h3>Numero 5. Vital Mask Pack</h3>
                            </div>
                            <div className="o-rating-des">
                                <div className="o-rating">
                                    <span className="rating rating-1"><i className="fas fa-star"></i></span>
                                    <span className="rating rating-1"><i className="fas fa-star"></i></span>
                                    <span className="rating rating-1"><i className="fas fa-star"></i></span>
                                    <span className="rating rating-1"><i className="fas fa-star"></i></span>
                                    <span className="rating rating-1"><i className="fas fa-star"></i></span>
                                </div>
                                <div className="o-rating-person"><a href="#">Có 4 đánh giá.</a></div>
                            </div>
                            <div className="o-product-howmuch">
                                <div className="o-price">
                                    <p>Giá bán: </p>
                                    <input type="text" value="380000đ" className="price" readOnly />
                                </div>
                                <div className="o-amount">
                                    <p>Số lượng: </p>
                                    <div className="o-choose">
                                        <button type="button" className="clickSub">-</button>
                                        <input type="text" value="1" className="mount" readOnly/>
                                        <button type="button" className="clickAdd">+</button>
                                    </div>
                                </div>
                                <div className="o-price">
                                    <p>Thành tiền: </p>
                                    <input type="text" value="380000đ" className="total" readOnly="" />
                                </div>
                                <div className="o-name-client">
                                    <p>Khách hàng: </p>
                                    <span>Nguyễn Văn An</span>
                                </div>
                                <div className="o-address-client">
                                    <p>Địa chỉ: </p>
                                    <span>1A Phan Xích Long, Phường 13, quận Phú Nhuận, TP. Hồ Chí Minh</span>
                                </div>
                                <div className="o-phone-client">
                                    <p>Số điện thoại: </p>
                                    <span>0978.113.113</span>
                                </div>
                                <div className="o-phone-client">
                                    <p>Gmail: </p>
                                    <span>hoang_tu_bang_gia_2018@gmail.com</span>
                                </div>
                                <div className="o-phone-client">
                                    <p>Phí giao hàng: </p>
                                    <span>11.000đ</span>
                                </div>
                            </div>
                            <div className="o-payment">
                                <span></span>
                                <p>Tổng cộng: <span>391000đ</span></p>
                            </div>
                        </div>
                    </div>
                </section>
                <p className="o-line"></p>
                {/* <!-- product End --> */}

                <button onClick={this.buyNow}>buy now</button>
            </div>
        )
    }
}



const mapStateToProps = (state) => {
    console.log(state)
    const { productState } = state;
    console.log(productState);
    return {
        productState
    }
}

function mapDispatchToProps(dispatch) {
    return {
        postOrderAction: (model) => {
            postOrderAction(model)
                .then(action => dispatch(action));
        },
    }
}


export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(withRouter(Order));