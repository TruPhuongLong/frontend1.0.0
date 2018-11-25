import React, {Component} from 'react'

import './campaign.css'
import ProductImage from '../components/common/product.image'
import CampaignCard from '../components/common/campaign.card'
import CampaignLifeTime from '../components/common/campaign.lifetime'

class Campaign extends Component {

    campaign = {
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
                    max: 25
                },
                price: 400
            },
            {
                quantity: {
                    min: 26,
                    max: 30
                },
                price: 300
            }
        ],
        currentQuantity: 11,
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
                <CampaignLifeTime {...this.campaign}/>


            </div>
        )
    }
}

export default Campaign