import React from 'react'

import './product.description.css'

export default ({src, name}) => {
    return (
        <div className="row product-description">
            <div className="col-sm-6 col-md-5 col-md-push-7">
                <img src={src} alt=""/>
            </div>
            <div className="col-sm-6 col-md-7 col-md-pull-5">
                <div className="text-right vertical-align">
                    <div className="title">
                        <h2>Numero 5. <br/> {name}</h2>
                        <div><span></span></div>
                    </div>
                    <p className="">Chiếc mặt nạ đáp ứng nhu cầu <br/> 
                    chăm sóc da hằng ngày cho phụ nữ hiện đại. <br/>
                    Chỉ với 5 phút massage - 5 điểm nhấn trên mặt nạ <br/> 
                    cùng Numero 5 sẽ mang lại hiệu quả tuyệt vời.</p>
                </div>
            </div>
        </div>
    )
}