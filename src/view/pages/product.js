import React, { Component } from "react";
import { connect } from "react-redux";
import "./product.css";

class Product extends Component {
  render() {
    return (
      <div className="container">
        <div className="product-wrapper">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-xl-12">
              <div className="pro-beadcrumb">
                <ul>
                  <li>
                    <a href="#href">
                      <i className="fas fa-home" />
                    </a>
                  </li>
                  <li>
                    <a href="#href">Sản Phẩm</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* Product Numero 5 */}
          <section className="pro-product">
            <div className="row">
              <div className="col-xs-12 col-sm-5 col-md-5 col-lg-5">
                <div className="pro-product-around">
                  <div className="pro-product-img">
                    <img src="assets/images/product.jpg" alt="" />
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-xs-offset-0 col-sm-7 col-sm-offset-0 col-md-7 col-lg-7">
                <div className="pro-product-des">
                  <h2>Numero 5. Vital Mask</h2>
                  <div className="pro-product-rate">
                    <div className="pro-rate-star">
                      <span>
                        <i className="fas fa-star" />
                      </span>
                      <span>
                        <i className="fas fa-star" />
                      </span>
                      <span>
                        <i className="fas fa-star" />
                      </span>
                      <span>
                        <i className="fas fa-star" />
                      </span>
                      <span>
                        <i className="fas fa-star" />
                      </span>
                    </div>
                    <div className="pro-rate-detail">
                      <p>
                        <a href="#href">Có 4 đánh giá</a>
                      </p>
                    </div>
                  </div>
                  <div className="pro-howmuch">
                    <div className="pro-money">
                      <div className="row">
                        <div className="col-xs-6 col-sm-6 col-md-6 col-xl-6">
                          <p>Giá Bán:</p>
                        </div>
                        <div className="col-xs-6 col-sm-6 col-md-6 col-xl-6">
                          <span className="price">70000</span>
                        </div>
                      </div>
                    </div>
                    <div className="pro-mount">
                      <div className="row">
                        <div className="col-xs-6 col-sm-6 col-md-6 col-xl-6">
                          <p>Số Lượng:</p>
                        </div>
                        <div className="col-xs-6 col-sm-6 col-md-6 col-xl-6">
                          <div className="pro-choose">
                            <button type="button"> - </button>
                            <input type="text" value="1" />
                            <button type="button"> + </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-3 col-xl-6 text-center">
                <button
                  type="button"
                  className="btn btn-sm btn-md btn-xl pro-button pro-addcart"
                >
                  <i className="fas fa-plus" />
                  Thêm vào giỏ
                </button>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-3 col-xl-6 text-center">
                <button
                  type="button"
                  className="btn btn-sm btn-md btn-xl pro-button pro-buynow"
                >
                  <i className="fas fa-shopping-cart" />
                  Mua ngay
                </button>
              </div>
            </div>
          </section>
          {/* Product Numero 5 End */}
          {/* Product wrapper */}
          {/* Product Numero 5 */}
          <section className="pro-product">
            <div className="row">
              <div className="col-xs-12 col-sm-5 col-md-5 col-lg-5">
                <div className="pro-product-around">
                  <div className="pro-product-img">
                    <img src="assets/images/product.jpg" alt="" />
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-xs-offset-0 col-sm-7 col-sm-offset-0 col-md-7 col-lg-7">
                <div className="pro-product-des">
                  <h2>Numero 5. Vital Mask</h2>
                  <div className="pro-product-rate">
                    <div className="pro-rate-star">
                      <span>
                        <i className="fas fa-star" />
                      </span>
                      <span>
                        <i className="fas fa-star" />
                      </span>
                      <span>
                        <i className="fas fa-star" />
                      </span>
                      <span>
                        <i className="fas fa-star" />
                      </span>
                      <span>
                        <i className="fas fa-star" />
                      </span>
                    </div>
                    <div className="pro-rate-detail">
                      <p>
                        <a href="#href">Có 4 đánh giá</a>
                      </p>
                    </div>
                  </div>
                  <div className="pro-howmuch">
                    <div className="pro-money">
                      <div className="row">
                        <div className="col-xs-6 col-sm-6 col-md-6 col-xl-6">
                          <p>Giá Bán:</p>
                        </div>
                        <div className="col-xs-6 col-sm-6 col-md-6 col-xl-6">
                          <span className="price">70000</span>
                        </div>
                      </div>
                    </div>
                    <div className="pro-mount">
                      <div className="row">
                        <div className="col-xs-6 col-sm-6 col-md-6 col-xl-6">
                          <p>Số Lượng:</p>
                        </div>
                        <div className="col-xs-6 col-sm-6 col-md-6 col-xl-6">
                          <div className="pro-choose">
                            <button type="button"> - </button>
                            <input type="text" value="1" />
                            <button type="button"> + </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-3 col-xl-6 text-center">
                <button
                  type="button"
                  className="btn btn-sm btn-md btn-xl pro-button pro-addcart"
                >
                  <i className="fas fa-plus" />
                  Thêm vào giỏ
                </button>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-3 col-xl-6 text-center">
                <button
                  type="button"
                  className="btn btn-sm btn-md btn-xl pro-button pro-buynow"
                >
                  <i className="fas fa-shopping-cart" />
                  Mua ngay
                </button>
              </div>
            </div>
          </section>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {};
}

export default connect(mapStateToProps)(Product);
