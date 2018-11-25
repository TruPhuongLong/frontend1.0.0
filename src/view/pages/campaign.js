import React, {Component} from 'react'

import './campaign.css'
import ProductImage from '../components/common/product.image'
import CampaignCard from '../components/common/campaign.card'
import CampaignLifeTime from '../components/common/campaign.lifetime'

class Campaign extends Component {

    state = {
        prices: [
            {
                quantity: {
                    min: 0,
                    max: 10
                },
                price: 500
            },
            {
                quantity: {
                    min: 11,
                    max: 20
                },
                price: 400
            },
            {
                quantity: {
                    min: 21,
                    max: 30
                },
                price: 300
            }
        ],
        currentQuantity: 10,
    }

    onClick = () => {
        this.setState({
            currentQuantity: ++this.state.currentQuantity
        })
    }

    render(){
        return (
            <div className="container" style={{padding: '30px 0px'}}>
                <div className="row campaign">
                    <div className="col-md-6" style={{padding: '0px'}}>
                        <ProductImage src="assets/images/1(1).jpg"/>
                    </div>
                    <div className="col-md-6">
                        <CampaignCard />
                    </div>
                </div>

                {/* <br /><br /><br /><br /><br /><br /> */}
                <CampaignLifeTime {...this.state}/>

                <button onClick={this.onClick}>increment</button>

            </div>
        )
    }
}

export default Campaign