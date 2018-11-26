import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import moment from 'moment'

import './campaign.card.css'
import DayRange from '../core/day.range'
import TimeCard from './time.card'
import Star from '../core/star'
import LiIcon from './li.icon'
import NumberUp from '../core/number.up'
import PriceDown from '../core/price.down'
import PriceOld from '../core/price.old'
import Button from '../core/button'
import Icon from '../core/icon'


class CampaignCard extends Component {

    state = {
        time: {}
    }

    componentDidMount(){
        this.timeIntervalId = setInterval(this.calcDate, 1000)
    }

    componentWillUnmount(){
        clearInterval(this.timeIntervalId)
    }

    calcDate = () => {
        const {endDate} = this.props
        const now = moment();
        const expiration = moment(endDate);

        // get the difference between the moments
        const diff = expiration.diff(now);

        //express as a duration
        const diffDuration = moment.duration(diff);

        const time = {
            days: diffDuration.days(), 
            hours: diffDuration.hours(),
            minutes: diffDuration.minutes(),
            seconds: diffDuration.seconds()
        }

        this.setState({time})
    }


    render(){
        const {name, product, productName, startDate, endDate, currentQuantity, currentPrice, prices} = this.props

        const {time} = this.state
        const oldPrice = prices[0].price
        
        return (
            <div className="campaign-card">
                <DayRange start={startDate} end={endDate} style={{textAlign: 'end'}}/>
                <TimeCard time={time}/>
                <div style={{padding: '5px 10px'}}>
                    <div className="row">
                            <div className="col-6">
                                <LiIcon label="Hãng" content="Numero" />
                            </div>
                            <div className="col-6">
                                <span><Star /><Star /><Star /><Star /><Star half /></span>
                                <Link to="#" style={{fontSize: '16px'}}>Xem đánh giá</Link>
                            </div>
                    </div>
                    <LiIcon label="Xuất xứ" content="Hàn Quốc" />
                    <LiIcon label="Đã đăng ký" content={<span><NumberUp number={currentQuantity}/> Sản phẩm</span>} />
                    <LiIcon 
                        label="Giá hiện tại" 
                        content={<span>
                            <PriceDown price={currentPrice} unit="đ"/> 
                            <PriceOld price={oldPrice} unit="đ" />
                        </span>} 
                    />
                </div>
                
                <div>
                    <LiIcon 
                        icon={{src: "fas fa-gift", fontSize: '16px', opacity: '0.7'}}
                        label="Đơn hàng thứ 100 sẽ nhận được phần quà đặc biệt." />
                    <LiIcon 
                        icon={{src: "fas fa-shipping-fast", fontSize: '16px', opacity: '0.7'}}
                        label="Giao hàng trong vòng 7 ngày sau khi chương trình kết thúc" />
                    <LiIcon 
                        icon={{src: "fas fa-money-check-alt", fontSize: '16px', opacity: '0.7'}}
                        label="Thanh toán sau khi nhận hàng" />
                </div>
                
                <div style={{textAlign: 'center', padding: '15px'}}>
                    <Button onClick={this.props.registerCampaign}><i className="fas fa-plus"></i> Đăng kí</Button>
                    <br /><br />
                    <div>
                        <Icon src="far fa-thumbs-up" />
                        <Icon src="fas fa-share-square" />
                        <Icon src="far fa-copy" />
                    </div>
                </div>
                     
            </div>
        )
    }
}

export default CampaignCard
