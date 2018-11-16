import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "./homepage.css";
import Review from "../components/review";
import reviewDatas from "../../data/reviews";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showDetail: false
    };
  }

  toggleShowDetail = () => {
    const { showDetail } = this.state;
    this.setState({ showDetail: !showDetail });
  };

  reviewElements = reviewDatas => {
    return reviewDatas.map((review, index) => {
      return <Review key={index} review={review} />;
    });
  };

  render() {
    const { showDetail } = this.state;
    return (
      <div className="homepage-wr">
        {/* Popup */}
        {/* Popup End */}
        <div className="container">
          <div className="home-popup" data-popup="home-popup">
            <div className="home-popup-cart">
              <h2>Giỏ hàng trống</h2>
              <i className="fas fa-info-circle" />
              <a href="#href" data-popup-close="home-popup-cart">
                <img src="icon/cancel-music.svg" alt="" />
              </a>
            </div>
            <div className="home-input-info">
              <h2>Nhập mail/số điện thoại đặt hàng:</h2>
              <input type="text" />
              <button type="button">xác nhận</button>
              <a href="#href" data-popup-close="home-input-info">
                <img src="icon/cancel-music.svg" alt="" />
              </a>
            </div>
          </div>
          <section className="home-intro">
            <div className="row">
              <div className="col-sm-8 col-md-6 text-left">
                <div className="home-title-product">
                  <h2>
                    NUMERO 5. <br />
                    VITAL MASK PACK
                  </h2>
                  <span />
                </div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-6">
                {/* img product */}
                <div className="home-img-product">
                  <div className="home-around-img">
                    <img
                      src="/assets/images/product.jpg"
                      alt=""
                      style={{ width: "100%" }}
                    />
                  </div>
                </div>
                {/* img product */}
              </div>
              <div className="col-xs-12 col-sm-12 col-md-6 home-description-pc">
                {/* description */}
                <div className="home-des-product">
                  <div className="home-cntn-product">
                    <p>
                      Chiếc mặt nạ đáp ứng nhu cầu chăm sóc da hằng ngày cho phụ
                      nữ hiện đại.
                    </p>
                    <p>
                      Chỉ với 5 phút massage - 5 điểm nhấn trên mặt nạcung
                      numero 5 sẽ mang lại hiệu quả tuyệt vời.
                    </p>
                  </div>
                  <div className="col-sm-12 text-center">
                    <div className="home-btn">
                      <button
                        type="button"
                        className="home-btn-detail"
                        onClick={this.toggleShowDetail}
                      >
                        {showDetail ? "Hien chi tiet" : "An chi tiet"}
                      </button>
                      <Link to="/product" className="home-btn-product">
                        Mua ngay
                      </Link>
                    </div>
                  </div>
                </div>
                {/* description end */}
              </div>
            </div>
          </section>
          {showDetail && (
            <section className="home-intro-detail">
              <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-6 col-xl-6">
                  <div className="home-video-intro">
                    <div className="home-video-around">
                      <video width="100%" height="400px">
                        <source
                          src="https://www.youtube.com/watch?v=jeETvevBbyQ"
                          type="video/mp4"
                        />
                        <source
                          src="https://www.youtube.com/watch?v=jeETvevBbyQ"
                          type="video/ogg"
                        />
                      </video>
                    </div>
                  </div>
                </div>
                <div className="col-xs-12 col-sm-12 col-md-6 col-xl-6">
                  <div className="home-text-video">
                    <h2>Type something</h2>
                    <ul>
                      <li>
                        Chiếc mặt nạ đáp ứng nhu cầu chắm sóc da hằng ngày cho
                        phụ nữ hiện đại
                      </li>
                      <li>
                        Chỉ với 5 phút massage - 5 điểm nhấn trên mặt nạ cùng
                        Numero 5 sẽ mang lại hiệu quả tuyệt vời.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>
          )}
          <section className="home-element">
            <div className="row">
              <div className="col-xs-12 col-sm-12">
                <div className="home-title-element">
                  <div className="home-around-title">
                    <span />
                    <p>Thành phần</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="home-element-cntn">
              <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-4 col-xl-4">
                  <div className="home-element-item">
                    <div className="col-xs-6 col-sm-6 col-md-12">
                      <div className="home-element-title">
                        <h3>
                          Tảo lục <br />
                          Chlorella
                        </h3>
                        <span>
                          <i className="fas fa-ellipsis-h" />
                        </span>
                      </div>
                    </div>
                    <div className="col-sm-6 col-xs-6 col-md-12 col-xl-12">
                      <div className="home-element-product">
                        <img src="/assets/images/Asset2-8.png" alt="" />
                      </div>
                    </div>
                    <p className="col-xs-6 col-sm-6 col-md-12 col-xl-12  ">
                      Chứa hơn 20 loại Vitamin mang lại sức sống cho đổi mắt mệt
                      mỏi
                    </p>
                  </div>
                </div>
                <div className="col-xs-12 col-sm-12 col-md-4 col-xl-4">
                  <div className="home-element-item">
                    <div className="col-xs-6 col-sm-6 col-xs-push-6 col-sm-push-6 col-md-12 col-md-push-0">
                      <div className="home-element-title">
                        <h3>
                          Hoa vô thường <br />
                          Hibiscus
                        </h3>
                        <span>
                          <i className="fas fa-ellipsis-h" />
                        </span>
                      </div>
                    </div>
                    <div className="col-sm-6 col-xs-6 col-sm-pull-6 col-xs-pull-6 col-md-12 col-xl-12 col-md-pull-0 col-xl-pull-0">
                      <div className="home-element-product">
                        <img src="/assets/images/Asset3-8.png" alt="" />
                      </div>
                    </div>
                    <p className="col-xs-6 col-sm-6 col-xs-push-6 col-sm-push-6 col-md-12 col-xl-12 col-md-push-0 col-xl-push-0 ">
                      Làm sạch và săn chắc da thông qua tẩy tế bào chết
                    </p>
                  </div>
                </div>
                <div className="col-xs-12 col-sm-12 col-md-4 col-xl-4">
                  <div className="home-element-item">
                    <div className="col-xs-6 col-sm-6 col-md-12">
                      <div className="home-element-title">
                        <h3>
                          Cải xoăn <br />
                          Kale
                        </h3>
                        <span>
                          <i className="fas fa-ellipsis-h" />
                        </span>
                      </div>
                    </div>
                    <div className="col-sm-6 col-xs-6 col-md-12 col-xl-12">
                      <div className="home-element-product">
                        <img src="/assets/images/Asset4-8.png" alt="" />
                      </div>
                    </div>
                    <p className="col-xs-6 col-sm-6 col-md-12 col-xl-12 ">
                      Giữ ấm và làm sạch da, thanh lọc và đẩy độc tố ra khỏi cơ
                      thể.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="home-review">
            <div className="row">
              <div className="col-xs-12 col-sm-12">
                <div className="home-title-review">
                  <div className="home-around-review">
                    <span />
                    <p>Review</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="home-review-cntn">
              {/* review loop */}
              <div className="row make-columns">
                {this.reviewElements(reviewDatas)}
              </div>
              {/* review loop end */}
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

export default connect(mapStateToProps)(Home);
