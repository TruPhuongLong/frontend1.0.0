import React from 'react'

import './product.user.manual.css'

export default ({src}) => {
    return (
        <div className="row product-user-manual">
            <div className="col-sm-6 col-md-5">
                <video style={{width: '100%', height: '315px'}} controls>
                    <source src={src} type="video/mp4"/>
                </video>
            </div>
            <div className="col-sm-6 col-md-7">
                <div className="video-text">
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
        </div>
    )
}