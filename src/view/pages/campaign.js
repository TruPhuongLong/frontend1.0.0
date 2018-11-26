import React, { Component } from 'react'
import { connect } from 'react-redux'

import { createCampaignRegistrationAction } from '../../redux/actions/campagnRegistration.action'
import { dispatchWithLoading } from '../../libs/funcHelp'
import socket from '../../services/socketIO.service'

import './campaign.css'
import ProductImage from '../components/common/product.image'
import CampaignCard from '../components/common/campaign.card'
import CampaignLifeTime from '../components/common/campaign.lifetime'
import ProductDescription from '../components/common/product.description'
import ProductUserManual from '../components/common/product.user.manual'
import ProductIngredient from '../components/common/product.ingredient'
import Hr from '../components/core/hr'
import Carousel from '../components/common/carousel'

class Campaign extends Component {

    constructor(props) {
        super(props)

        socket.on('stc-updateCampaign', campaign => {
            console.log('=== quantity change: ', campaign.quantity)
        })
    }

    broadCardNewCampaignRegistration = (campaign) => {
        socket.emit('cts-updateCampaign', campaign);
    }

    create = () => {
        this.props.createCampaignRegistration(this.newCR)
            .then(campain => {
                
            })
    }

    newCR = {
        campaignId: '5bf7d0b5f1f5ba1694071f46',
        campaignName: 'keyboard campaign',
        quantity: 20,
        user: {
            email: 'longbaloca@gmail.com'
        },
    }

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
        currentQuantity: 10,
    }

    ingredients = [
        { nameVn: "Tảo Lục", nameEn: "Chlorella", src: "assets/images/Asset2-8.png", content: "Chứa hơn 20 loại vitamin mang lại sức sống cho đôi mắt mệt mỏi" },
        { nameVn: "Hoa Vô Thường", nameEn: "Hibicus", src: "assets/images/Asset3-8.png", content: "Làm sạch và săn chắc da thông qua quá trình tẩy tế bào chết" },
        { nameVn: "Cải Xoăn", nameEn: "Kale", src: "assets/images/Asset4-8.png", content: "Giữ ấm và làm sạch da thanh lọc và đẩy độc tố ra khỏi cơ thể" }
    ]

    render() {
        return (
            <div className="container" style={{ padding: '30px 0px' }}>
                <div className="row campaign-1">
                    <div className="col-md-6" style={{ padding: '0px' }}>
                        <ProductImage src="assets/images/1(1).jpg" />
                    </div>
                    <div className="col-md-6">
                        <CampaignCard />
                    </div>
                </div>

                <CampaignLifeTime {...this.campaign} />
                <br /><br />

                <button onClick={() => this.broadCardNewCampaignRegistration(this.newCR)}>create new CR</button>

                <div className="row">
                    <div className="col-md-10 col-md-offset-1">
                        <ProductDescription src="assets/images/1(1).jpg" name="Vital Mask Pack" />
                        <br /><br />
                        <ProductUserManual src="assets/video/intro.mp4" />
                    </div>
                </div>

                <Hr title="Thành Phần" />

                <div className="row">

                    {
                        this.ingredients.map((ingredient, index, array) => {
                            return (
                                <div className="col-sm-4" key={index}>
                                    <ProductIngredient {...ingredient} />
                                </div>
                            )
                        })
                    }

                </div>

                <Hr title="Review" />

                <Carousel />

            </div>
        )
    }
}

const mapStateToProps = state => {
    const { current } = state.campaignState
    return { current }
}

const mapDispatchToProps = dispatch => {
    return {
        createCampaignRegistration: (model) => {
            return dispatchWithLoading(dispatch, createCampaignRegistrationAction(model))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Campaign)

/**
 * campaignId: 5bf7d0b5f1f5ba1694071f46,
    campaignName: keyboard campaign,
    quantity: {
        type: 30,
        required: true
    },
    user: {
        type: UserSchema,
        required: true
    },
 */