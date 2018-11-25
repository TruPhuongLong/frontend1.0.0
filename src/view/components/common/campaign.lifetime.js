import React from 'react'
import ReactDOM from 'react-dom';

import './campaign.lifetime.css'
import CirclePoint from '../core/circle.point'
import PriceLabel from '../core/price.label'
import CirclePointRun from '../core/circle.point.run'
import LineGradient from '../core/line.gradient'
import List from '../core/list'

class CampaignLifeTime extends React.Component {

    constructor(props){
        super(props)
        this.updateCurrentQuantity()
        this.calcPercentForEachPoint()
    }

    componentWillReceiveProps({currentQuantity}){
        if(currentQuantity !== this.props.currentQuantity){
            this.updateCurrentQuantity()
        }
    }

    updateCurrentQuantity = () => {
        const maxQuantity = this.getMaxQuantityRange()
        const p = this.calcPercentCurrent(this.props.currentQuantity, maxQuantity)  
        document.documentElement.style.setProperty('--run-percent', `${p}%`)
    }

    getMaxQuantityRange = () => {
        const {prices} = this.props 
        if(!prices || prices.length <= 0) return 0;
        // because prices sort with prices from big -> small <=> quantity from small -> big
        const maxQuantity = prices[prices.length - 1].quantity.min
        return maxQuantity
    }

    calcPercentCurrent = (nextQuantity, maxQuantity) => {
        let p = Math.round(nextQuantity / maxQuantity * 100)
        p = p <= 0 ? 0 : (p >= 100 ? 100 : p)
        return p
    }

    calcPercentForEachPoint = () => {
        const {prices} = this.props 
        const maxQuantity = this.getMaxQuantityRange()
        prices.forEach((item, index) => {
            const q = item.quantity.min
            const p = this.calcPercentCurrent(q, maxQuantity)
            document.documentElement.style.setProperty(`--run-percent-${index + 1}`, `${p}%`)
        })
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