import React from 'react'

import './carousel.css'
import Review from './review'

export default class Carousel extends React.Component {

    constructor(props){
        super(props)
    }

    reviews = [
        {userName: "Kim Trúc", src: "assets/images/customer1.jpg", content: "Mình cũng mới biết vài hôm thôi, và nghe nói mask này đang tạo nên cơn sốt tại Hàn Quốc gì đấy đấy. Thiết kế từ bên ngoài đến bên trong đều siêu yêu. Chất mask mỏng và ôm khít mặt nó như miếng vải mà cũng không hẳn nó hơi lụa lụa tơ tơ (khó tả quá bỏ qua nha hihi)"},
        {userName: "Hồng Anh", src: "assets/images/customer2.jpg", content: "Hôm bữa lướt newfeed thấy có chương trình nhận mặt nạ miễn phí bên Icondeals. Thấy lạ nên đăng kí dùng thử sản phẩm của Numero 5. Mở bịch mặt nạ ra bất ngờ vì hình mặt nạ quá cute. So với các sản phẩm khác ngoài thị trường thì đây là lần đầu tiên thấy được loại mặt nạ nào giống như vậy"},
        {userName: "Mỹ Hảo", src: "assets/images/customer3.jpg", content: "Mình cũng mới biết vài hôm thôi, và nghe nói mask này đang tạo nên cơn sốt tại Hàn Quốc gì đấy đấy. Thiết kế từ bên ngoài đến bên trong đều siêu yêu. Chất mask mỏng và ôm khít mặt nó như miếng vải mà cũng không hẳn nó hơi lụa lụa tơ tơ (khó tả quá bỏ qua nha hihi)"},
        {userName: "Minh Thùy", src: "assets/images/customer4.jpg", content: "Mask này rất là mới đối với T và giá thành cao hơn so với mặt bằng chung (120.000vnd/1 miếng). Với giá cao như vậy thì nó làm đc gì? Để thử hiệu quả của nsx quảng cáo là làm trắng da vì chiết xuất từ tảo, cải xoăn, hoa dâm bụt =))) và giảm sưng mặt thì T cố ý dùng nó vào buổi sáng, vì buổi sáng là lúc mặt T sưng nhất (do thức khuya, uống nước vào buổi tối quá nhiều)"},
        {userName: "Tiên Trương", src: "assets/images/customer5.jpg", content: "Dùng rất tốt, hút sạch bụi trên da, còn có icon dễ thương nữa"}
    ]

    state = {
        total: this.reviews.length,
        current: 0,
        step: 1,
        numberShow: 3,
    }

    componentDidMount(){
        this.timeIntervalId = setInterval(this.slide, 3000)
    }

    componentWillUnmount(){
        clearInterval(this.timeIntervalId)
    }

    slide = () => {
        const {total, current, step, numberShow} = this.state
        let _current = current + step
        _current = _current + numberShow < total ? _current : 0
        this.setState({
            current: _current
        })
    }

    

    render(){
        const {current, numberShow} = this.state
        const arrDummy = Array(numberShow).fill(0)
        console.log(arrDummy)
        return (
            <div className="row" style={{height: '300px'}}>
                {
                    arrDummy.map((_, index) => {
                        return (
                            <div className={`col-md-${12 / numberShow}`}>
                                <Review {...this.reviews[current + index]} />
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}