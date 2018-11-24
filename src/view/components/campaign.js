import React from 'react'
import { connect } from 'react-redux'

import '../css/campaign.css'
import socket from '../../services/socketIO.service'
import { setCurrentCampaignAction } from '../../redux/actions/campagn.action'

class Campaign extends React.Component {

    constructor(props) {
        super(props)

        socket.on('stc-updateCampaign', campaign => {
            console.log('=== quantity change: ', campaign.quantity)

            props.setCurrentCampaign(campaign)
        })
    }

    componentDidMount(){
        
    }


    send = (num) => {
        const campaign = { quantity: num }
        socket.emit('cts-updateCampaign', campaign);
    }

    render() {
        return (
            <div className="container">
                {/* <!-- popup thank --> */}
                <div className="cam-popup-thank-wr hide">
                    {/* <!--  thank you contain --> */}
                    <div className="col-xs-10 col-xs-offset-1 popup-thanks-wr">
                        <div className="cam-thank-icon">
                            <p><i className="fas fa-info-circle"></i></p>
                        </div>
                        <div className="cam-thank-cntn">
                            <span><i className="fas fa-plus"></i></span>
                            <div className="cam-des-thank">
                                <p>Cám ơn bạn đã đăng ký tham gia chương trình! </p>
                                <p>Like Facebook và Instagram của Icon Deals để cập nhật sản phẩm mới. </p>
                                <p>Đừng quên chia sẻ link cho bạn bè để được giá tốt nhất nha!</p>
                            </div>
                        </div>
                    </div>
                    {/* <!--  thank you contain end --> */}
                </div>
                {/* <!-- popup thank end --> */}
                {/* <!-- Popup form --> */}
                <div className="cam-popup-wrapper hide">
                    {/* <!-- popup fill wr --> */}
                    <div className="col-xs-10 col-xs-offset-1 popup-fill-wr">
                        <div className="popup-fill">
                            <div className="fill-title">
                                <div className="row">
                                    <div className="col-sm-6 fill-title-name">
                                        <h2>Numero 5. Vital Mask pack</h2>
                                    </div>
                                    <div className="col-sm-6 fill-title-info">
                                        <h2>Thông tin đăng kí</h2>
                                        <span><i className="fas fa-plus"></i></span>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- fill content --> */}
                            <div className="row cam-pp-if-wr">
                                {/* <!-- img fill --> */}
                                <div className="col-sm-6">
                                    <div className="img-fill">
                                        <img src="assets/images/1(1).jpg" alt="" />
                                    </div>
                                </div>
                                {/* <!-- img fill end -->
                     <!-- info fill --> */}
                                <div className="col-sm-6 fill-title-info-mb">
                                    <h2>Thông tin đăng kí</h2>
                                    <span><i className="fas fa-plus"></i></span>
                                </div>
                                <div className="col-sm-6 fill-info-cntn">
                                    <div className="fill-element text-left">
                                        <div className="row">
                                            <div className="col-xs-5 col-md-4">
                                                <p>Khách hàng: </p>
                                            </div>
                                            <input type="text" value="" className="col-xs-7 col-md-8" />
                                        </div>
                                    </div>
                                    <div className="fill-element text-left">
                                        <div className="row">
                                            <div className="col-xs-5 col-md-4">
                                                <p>Điện thoại: </p>
                                            </div>
                                            <input type="text" value="" className="col-xs-7 col-md-8" />
                                        </div>
                                    </div>
                                    <div className="fill-element text-left">
                                        <div className="row">
                                            <div className="col-xs-5 col-md-4">
                                                <p>Gmail: </p>
                                            </div>
                                            <input type="text" value="" className="col-xs-7 col-md-8" />
                                        </div>
                                    </div>
                                    {/* <!-- choose --> */}
                                    <div className="fill-element fill-mount text-left">
                                        <div className="row">
                                            <div className="col-xs-5 col-md-4">
                                                <p>Số lượng: </p>
                                            </div>
                                            <div className="col-xs-7 col-md-8">
                                                <button className="btn fill-btn-choose"> - </button>
                                                <input className="" type="text" value="01" />
                                                <button className="btn fill-btn-choose"> + </button>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <!-- choose end --> */}
                                    <div className="fill-element text-left fill-total">
                                        <div className="row">
                                            <div className="col-xs-5 col-md-4">
                                                <p>Giá hiện tại: </p>
                                            </div>
                                            <div className="col-xs-7 col-md-8">
                                                <span>392.000đ</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="fill-element text-left fill-total fill-current">
                                        <div className="row">
                                            <div className="col-xs-5 col-md-4">
                                                <p>Giá hiện tại: </p>
                                            </div>
                                            <div className="col-xs-7 col-sm-7 col-md-8 col-xl-8">
                                                <span>392.000đ</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row text-center fill-button">
                                        <div className="col-xs-6 col-xs-offset-3 col-md-4 col-md-offset-4">
                                            <div className="btn btn-xs btn-sm btn-md btn-xl disabled btn-order"><i className="fas fa-shopping-cart"></i>Đặt hàng</div>
                                        </div>
                                    </div>
                                    {/* <!-- icon share --> */}
                                    <div className="row icon-share">
                                        <div className="col-xs-12 text-center">
                                            <div className="cam-icon">
                                                <span><i className="far fa-thumbs-up"></i></span>
                                                <span><i className="fas fa-share-square"></i></span>
                                                <span><i className="far fa-copy"></i></span>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <!-- icon share end --> */}
                                </div>
                                {/* <!-- info fill end --> */}
                            </div>
                            {/* <!-- fill content --> */}
                            <div className="row">
                                <div className="col-md-10 col-md-offset-1">
                                    <div className="fill-script">
                                        <div className="col-sm-5 text-left">
                                            <div className="script-element">
                                                <span><i className="fas fa-check"></i></span>
                                                <p>Script for business video</p>
                                            </div>
                                        </div>
                                        <div className="col-sm-7 text-left">
                                            <div className="script-element">
                                                <span><i className="fas fa-check"></i></span>
                                                <p>Script for business video Script for business video</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- popup fill wr end --> */}
                </div>
                {/* <!-- popup form end --> */}
                <div className="campaign-wr">
                    <div className="row">
                        {/* <!-- img --> */}
                        <div className="col-sm-6 cam-img-around">
                            <div className="cam-img-product">
                                <h2>Numero 5. Vital Mask Pack</h2>
                                <div className="cam-img-product">
                                    <ul className="col-xs-3">
                                        <li><img src="assets/images/1(1).jpg" alt="" /></li>
                                        <li><img src="assets/images/1(1).jpg" alt="" /></li>
                                        <li><img src="assets/images/1(1).jpg" alt="" /></li>
                                        <li><img src="assets/images/1(1).jpg" alt="" /></li>
                                    </ul>
                                    <img src="assets/images/1(1).jpg" alt="" className="col-xs-9" />
                                </div>
                            </div>
                        </div>
                        {/* <!-- img end --> */}
                        {/* <!-- Content campaign --> */}
                        <div className="col-sm-6">
                            <div className="cam-content">
                                <h3>26/11/2018 - 03/12/2018</h3>
                                {/* <!-- countdown --> */}
                                <ul className="countdown">
                                    <li><span className="count"><span className="line-count"></span>0</span></li>
                                    <li><span className="count"><span className="line-count"></span>6</span></li>
                                    <li><span className="dot">:</span></li>
                                    <li><span className="count"><span className="line-count"></span>2</span></li>
                                    <li><span className="count"><span className="line-count"></span>4</span></li>
                                    <li><span className="dot">:</span></li>
                                    <li><span className="count"><span className="line-count"></span>5</span></li>
                                    <li><span className="count"><span className="line-count"></span>9</span></li>
                                    <li><span className="dot">:</span></li>
                                    <li><span className="count"><span className="line-count"></span>6</span></li>
                                    <li><span className="count"><span className="line-count"></span>0</span></li>
                                </ul>
                                {/* <!-- countdown end -->
                     <!-- branch --> */}
                                <div className="row cam-element">
                                    <div className="col-md-10 col-md-offset-1">
                                        <div className="col-xs-6 cam-padding text-left">
                                            <div className="branch">
                                                <span><i className="fas fa-tags"></i></span>
                                                <p>Hãng: Numero</p>
                                            </div>
                                        </div>
                                        <div className="col-xs-6 text-left">
                                            <div className="cam-rate-star">
                                                <span><i className="fas fa-star"></i></span>
                                                <span><i className="fas fa-star"></i></span>
                                                <span><i className="fas fa-star"></i></span>
                                                <span><i className="fas fa-star"></i></span>
                                                <span><i className="fas fa-star-half-alt"></i></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- branch end -->
                     <!-- status --> */}
                                <div className="row cam-element">
                                    <div className="col-md-10 col-md-offset-1">
                                        <div className="col-xs-6 cam-padding text-left">
                                            <div className="status">
                                                <span><i className="fas fa-eye"></i></span>
                                                <p>Đang truy cập: 20</p>
                                            </div>
                                        </div>
                                        <div className="col-xs-6 text-left">
                                            <div className="status">
                                                <span><i className="fas fa-plus"></i></span>
                                                <p>Đã đăng kí: 280</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- status end -->
                     <!-- info --> */}
                                <div className="row info">
                                    <div className="col-md-8 col-md-offset-2 text-center">
                                        <p>Đơn hàng thứ 100 sẽ nhận được một món quá bất ngờ</p>
                                    </div>
                                </div>
                                {/* <!-- info end -->
                     <!-- button --> */}
                                <button type="button" className="btn btn-xs btn-sm btn-md btn-xl cam-btn-sign-up" data-toggle="modal" data-target="#myModal"><i className="fas fa-plus"></i>Đăng kí</button>
                                {/* <!-- button end -->
                     <!-- icon share --> */}
                                <div className="row icon-share">
                                    <div className="col-xs-12 text-center">
                                        <div className="cam-icon">
                                            <span><a href="#"><i className="far fa-thumbs-up"></i></a></span>
                                            <span><a href="#"><i className="fas fa-share-square"></i></a></span>
                                            <span><a href="#"><i className="far fa-copy"></i></a></span>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- icon share end --> */}
                            </div>
                        </div>
                        {/* <!-- Content campaign end --> */}
                    </div>
                </div>
                {/* <!-- progess bar --> */}
                <div className="row progess-bar-pc">
                    <div className="progess">
                        <span className="across-progess">0</span>
                        <span className="step-progess step-150">70
                  <span className="price">450k</span>
                        </span>
                        <span className="step-progess step-200">140
                  <span className="price">400k</span>
                        </span>
                        <span className="step-progess step-350">250
                  <span className="price">360k</span>
                        </span>
                        <span className="step-progess step-500">600
                  <span className="price">300k</span>
                        </span>
                    </div>
                </div>
                {/* <!-- progess bar end -->
         <!-- progess bar mobile --> */}
                <div className=" progess-bar-mb">
                    <div className="progess">
                        <span className="across-progess">0</span>
                        <span className="step-progess step-150-mb">150</span>
                        <span className="step-progess step-200-mb">200</span>
                    </div>
                </div>
                {/* <!-- progess bar mobile end -->
         <!-- home page --> */}
                <div className="home-page-campaign">
                    <div className="row">
                        <div className="col-md-10 col-md-offset-1">
                            <div className="home-intro">
                                <div className="row">
                                    <div className="col-sm-6 col-md-5 col-md-push-7 col-xl-5 col-xl-push-7">
                                        <div className="home-intro-img">
                                            <img src="assets/images/1(1).jpg" alt="" />
                                        </div>
                                    </div>
                                    {/* <!-- intro text --> */}
                                    <div className="col-sm-6 col-md-7 col-md-pull-5 col-xl-7 col-xl-pull-5">
                                        <div className="home-intro-text text-right">
                                            <div className="home-title">
                                                <h2>Numero 5. <br /> Vital Mask Pack</h2>
                                                <span></span>
                                            </div>
                                            <p className="">Chiếc mặt nạ đáp ứng nhu cầu <br /> chăm sóc da hằng ngày cho phụ nữ hiện đại. <br />Chỉ với 5 phút massage - 5 điểm nhấn trên mặt nạ <br /> cùng Numero 5 sẽ mang lại hiệu quả tuyệt vời.</p>
                                        </div>
                                    </div>
                                    {/* <!-- intro text end --> */}
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- intro end -->
            <!-- intro detail --> */}
                    <div className="row">
                        <div className="col-md-10 col-md-offset-1">
                            <div className="home-intro-detail">
                                {/* <!-- video --> */}
                                <div className="col-sm-6 col-md-5">
                                    <div className="home-video">
                                        <video style={{ width: '100%', height: '315px' }} controls>
                                            <source src="assets/video/intro.mp4" type="video/mp4" />
                                        </video>
                                    </div>
                                </div>
                                {/* <!-- video end -->
                     <!-- video text --> */}
                                <div className="col-sm-6 col-md-7">
                                    <div className="home-video-text text-left">
                                        <h2>Hướng dẫn sử dụng</h2>
                                        <ul>
                                            <li>Làm sạch da và đắp mặt nạ lên da</li>
                                            <li>Điều chỉnh cho vừa với khuôn mặt</li>
                                            <li>Dùng tay vuốt cho mặt nạ sát khuôn mặt</li>
                                            <li>Thư giãn trong vòng 15-20 phút</li>
                                            <li>Gỡ mặt nạ</li>
                                            <li>Dùng các tinh chất còn lại trong bao và massage da mặt</li>
                                        </ul>
                                    </div>
                                </div>
                                {/* <!-- video text end --> */}
                            </div>
                        </div>
                    </div>
                    {/* <!-- intro detail end -->
            <!-- Ingredient Title --> */}
                    <div className="row">
                        <div className="col-md-10 col-md-offset-1 text-left">
                            <div className="home-ingredient">
                                <span></span>
                                <p>Thành Phần</p>
                            </div>
                        </div>
                    </div>
                    {/* <!-- Ingredient Title end -->
            <!-- ingredient --> */}
                    <div className="row">
                        {/* <!-- element --> */}
                        <div className="col-sm-4">
                            <div className="home-ingredient-main">
                                <div className="home-ingredient-name">
                                    <h3>Tảo lục <br />Chlorella</h3>
                                    <span><i className="fas fa-ellipsis-h"></i></span>
                                </div>
                                <div className="home-ingredient-img">
                                    <div>
                                        <img src="assets/images/Asset2-8.png" alt="" />
                                    </div>
                                </div>
                                <div className="home-ingredient-cntn">
                                    <div className="col-xs-12">
                                        <p>Chứa hơn 20 loại vitamin mang lại sức sống cho đôi mắt mệt mỏi</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!-- element end -->
               <!-- element --> */}
                        <div className="col-sm-4">
                            <div className="home-ingredient-main">
                                <div>
                                    <div className="home-ingredient-name">
                                        <h3>Hoa Vô Thường <br />Hibicus</h3>
                                        <span><i className="fas fa-ellipsis-h"></i></span>
                                    </div>
                                    <div className="home-ingredient-img">
                                        <div>
                                            <img src="assets/images/Asset3-8.png" alt="" />
                                        </div>
                                    </div>
                                    <div className="home-ingredient-cntn">
                                        <div>
                                            <p>Làm sạch và săn chắc da thông qua quá trình tẩy tế bào chết</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!-- element end -->
               <!-- element --> */}
                        <div className="col-sm-4">
                            <div className="home-ingredient-main">
                                <div>
                                    <div className="home-ingredient-name">
                                        <h3>Cải xoăn <br />Kale</h3>
                                        <span><i className="fas fa-ellipsis-h"></i></span>
                                    </div>
                                    <div className="home-ingredient-img">
                                        <div>
                                            <img src="assets/images/Asset4-8.png" alt="" />
                                        </div>
                                    </div>
                                    <div className="home-ingredient-cntn">
                                        <div>
                                            <p>Giữ ấm và làm sạch da thanh lọc và đẩy độc tố ra khỏi cơ thể</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!-- element end --> */}
                    </div>
                    {/* <!-- ingredient end --> */}
                </div>
                {/* <!-- home page end -->
         <!-- review wrapper -->
         <!-- Review Title --> */}
                <div className="row">
                    <div className="col-md-10 col-md-offset-1 text-left">
                        <div className="home-ingredient">
                            <span></span>
                            <p>Review</p>
                        </div>
                    </div>
                </div>
                {/* <!-- Review Title end --> */}
                <div className="review-wr">
                    {/* <!-- review --> */}
                    <div className="row">
                        <div>
                            {/* <!-- carosel --> */}
                            <div id="owl-demo" className="owl-carousel">
                                {/* <!-- review customer --> */}
                                <div className="item">
                                    <div className="cam-cntn-review">
                                        <p>Mình cũng mới biết vài hôm thôi, và nghe nói mask này đang tạo nên cơn sốt tại Hàn Quốc gì đấy đấy <br />Thiết kế từ bên ngoài đến bên trong đều siêu yêu <br /> Chất mask mỏng và ôm khít mặt nó như miếng vải mà cũng không hẳn nó hơi lụa lụa tơ tơ (khó tả quá bỏ qua nha hihi)</p>
                                    </div>
                                    <div className="row cam-rate">
                                        <div className="col-xs-5 text-left">
                                            <p>Chị A: </p>
                                        </div>
                                        <div className="col-xs-7 text-left">
                                            <span><i className="fas fa-star"></i></span>
                                            <span><i className="fas fa-star"></i></span>
                                            <span><i className="fas fa-star"></i></span>
                                            <span><i className="fas fa-star"></i></span>
                                            <span><i className="fas fa-star"></i></span>
                                        </div>
                                    </div>
                                    <img className="lazyOwl" data-src="assets/images/customer1.jpg" alt="Lazy Owl Image" />
                                </div>
                                {/* <!-- review customer end -->
                     <!-- review customer --> */}
                                <div className="item">
                                    <div className="cam-cntn-review">
                                        <p>Mình cũng mới biết vài hôm thôi, và nghe nói mask này đang tạo nên cơn sốt tại Hàn Quốc gì đấy đấy <br />Thiết kế từ bên ngoài đến bên trong đều siêu yêu <br /> Chất mask mỏng và ôm khít mặt nó như miếng vải mà cũng không hẳn nó hơi lụa lụa tơ tơ (khó tả quá bỏ qua nha hihi)</p>
                                    </div>
                                    <div className="row cam-rate">
                                        <div className="col-xs-5 text-left">
                                            <p>Chị A: </p>
                                        </div>
                                        <div className="col-xs-7 text-left">
                                            <span><i className="fas fa-star"></i></span>
                                            <span><i className="fas fa-star"></i></span>
                                            <span><i className="fas fa-star"></i></span>
                                            <span><i className="fas fa-star"></i></span>
                                            <span><i className="fas fa-star"></i></span>
                                        </div>
                                    </div>
                                    <img className="lazyOwl" data-src="assets/images/customer1.jpg" alt="Lazy Owl Image" />
                                </div>
                                {/* <!-- review customer end -->
                     <!-- review customer --> */}
                                <div className="item">
                                    <div className="cam-cntn-review">
                                        <p>Mình cũng mới biết vài hôm thôi, và nghe nói mask này đang tạo nên cơn sốt tại Hàn Quốc gì đấy đấy <br />Thiết kế từ bên ngoài đến bên trong đều siêu yêu <br /> Chất mask mỏng và ôm khít mặt nó như miếng vải mà cũng không hẳn nó hơi lụa lụa tơ tơ (khó tả quá bỏ qua nha hihi)</p>
                                    </div>
                                    <div className="row cam-rate">
                                        <div className="col-xs-5 text-left">
                                            <p>Chị A: </p>
                                        </div>
                                        <div className="col-xs-7 text-left">
                                            <span><i className="fas fa-star"></i></span>
                                            <span><i className="fas fa-star"></i></span>
                                            <span><i className="fas fa-star"></i></span>
                                            <span><i className="fas fa-star"></i></span>
                                            <span><i className="fas fa-star"></i></span>
                                        </div>
                                    </div>
                                    <img className="lazyOwl" data-src="assets/images/customer1.jpg" alt="Lazy Owl Image" />
                                </div>
                                {/* <!-- review customer end -->
                     <!-- review customer --> */}
                                <div className="item">
                                    <div className="cam-cntn-review">
                                        <p>Mình cũng mới biết vài hôm thôi, và nghe nói mask này đang tạo nên cơn sốt tại Hàn Quốc gì đấy đấy <br />Thiết kế từ bên ngoài đến bên trong đều siêu yêu <br /> Chất mask mỏng và ôm khít mặt nó như miếng vải mà cũng không hẳn nó hơi lụa lụa tơ tơ (khó tả quá bỏ qua nha hihi)</p>
                                    </div>
                                    <div className="row cam-rate">
                                        <div className="col-xs-5 text-left">
                                            <p>Chị A: </p>
                                        </div>
                                        <div className="col-xs-7 text-left">
                                            <span><i className="fas fa-star"></i></span>
                                            <span><i className="fas fa-star"></i></span>
                                            <span><i className="fas fa-star"></i></span>
                                            <span><i className="fas fa-star"></i></span>
                                            <span><i className="fas fa-star"></i></span>
                                        </div>
                                    </div>
                                    <img className="lazyOwl" data-src="assets/images/customer1.jpg" alt="Lazy Owl Image" />
                                </div>
                                {/* <!-- review customer end -->
                     <!-- review customer --> */}
                                <div className="item">
                                    <div className="cam-cntn-review">
                                        <p>Mình cũng mới biết vài hôm thôi, và nghe nói mask này đang tạo nên cơn sốt tại Hàn Quốc gì đấy đấy <br />Thiết kế từ bên ngoài đến bên trong đều siêu yêu <br /> Chất mask mỏng và ôm khít mặt nó như miếng vải mà cũng không hẳn nó hơi lụa lụa tơ tơ (khó tả quá bỏ qua nha hihi)</p>
                                    </div>
                                    <div className="row cam-rate">
                                        <div className="col-xs-5 text-left">
                                            <p>Chị A: </p>
                                        </div>
                                        <div className="col-xs-7 text-left">
                                            <span><i className="fas fa-star"></i></span>
                                            <span><i className="fas fa-star"></i></span>
                                            <span><i className="fas fa-star"></i></span>
                                            <span><i className="fas fa-star"></i></span>
                                            <span><i className="fas fa-star"></i></span>
                                        </div>
                                    </div>
                                    <img className="lazyOwl" data-src="assets/images/customer1.jpg" alt="Lazy Owl Image" />
                                </div>
                                {/* <!-- review customer end --> */}

                            </div>
                            {/* <!-- carosel end --> */}
                        </div>
                    </div>
                    {/* <!-- review end --> */}
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {

}

const mapDispatchToProps = dispatch => {
    return {
        setCurrentCampaign: campaign => {
            return dispatch(setCurrentCampaignAction(campaign))
        }
    }
}

export default connect(null, mapDispatchToProps)(Campaign)