import React from 'react'
import ReactDOM from 'react-dom';

import './campaign.lifetime.css'
import CirclePoint from '../core/circle.point'
import PriceLabel from '../core/price.label'
import CirclePointRun from '../core/circle.point.run'
import LineGradient from '../core/line.gradient'
import List from '../core/list'

class CampaignLifeTime extends React.Component {

    componentWillReceiveProps({currentQuantity}){
        if(currentQuantity !== this.props.currentQuantity){
            // update CirclePointRun 
            const p = this.calcPercent(currentQuantity)  
            // console.log('receive new percent: ', p)       
            document.documentElement.style.setProperty('--run-percent', `${p}%`)
        }
    }

    calcPercent = (nextQuantity) => {
        const {prices} = this.props 
        if(!prices || prices.length <= 0) return 0;
        const maxQuantity = prices[prices.length - 1].quantity.min
        // console.log('max quantity', maxQuantity)
        return Math.round(nextQuantity / maxQuantity * 100)
    }

    render(){
        const {prices, currentQuantity} = this.props
        return (
            <div className="campaign-lifetime-container">
                <div className="campaign-lifetime">
    
                    <LineGradient />

                    <List
                        itemSource={prices}
                        renderRows={(item, index, array) => {
                            return (
                                <div className="campaign-lifetime-point" key={index}>
                                    <PriceLabel label={item.price}/>
                                    <CirclePoint label={item.quantity.min}/>
                                </div>
                            )
                        }}
                        style={{justifyContent: 'space-between'}}
                    />

                    <CirclePointRun label={currentQuantity} />

                </div>
            </div>
        )
    }
}

export default CampaignLifeTime


/**
 * name: {
        type: String,
        required: true
    },
    product: {
        type: Schema.Types.ObjectId,
        required: true,
    },
    productName: {
        type: String,
    },
    startDate: {
        type: Date,
        required: true,
    },
    endDate: {
        type: Date,
        required: true,
    },
    prices: [
        {
            quantity: {
                min: {
                    type: Number,
                    required: true,
                },
                max: {
                    type: Number,
                }
            },
            price: {
                type: Number,
                required: true
            }
        }
    ],
    currentQuantity: Number,
    createAt: {
        type: Date,
        default: Date.now
    },
    editAt: Date
 */