import React, { Component } from 'react'
import { connect } from 'react-redux'

import { createCampaignRegistrationAction } from '../../redux/actions/campagnRegistration.action'
import {getCampaignAction, getCampaignsAction, setCurrentCampaignAction} from '../../redux/actions/campagn.action'
import { dispatchWithLoading } from '../../libs/funcHelp'
import socket from '../../services/socketIO.service'

import '../css/campaign.css'
import ProductImage from '../components/common/product.image'
import CampaignCard from '../components/common/campaign.card'
import CampaignLifeTime from '../components/common/campaign.lifetime'
import ProductDescription from '../components/common/product.description'
import ProductUserManual from '../components/common/product.user.manual'
import ProductIngredient from '../components/common/product.ingredient'
import Hr from '../components/core/hr'
import Carousel from '../components/common/carousel'
import RegisterModal from '../components/modal'


class Campaign extends Component {

    state = {isShow: false}

    constructor(props) {
        super(props)

        socket.on('stc-updateCampaign', campaign => {
            campaign && this.props.setCurrentCampaign(campaign)
        })
    }

    componentDidMount(){
        this.props.getCampaigns()
    }

    emitNewCR = (campaign) => {
        socket.emit('cts-updateCampaign', campaign);
    }

    upload = (model) => {
        this.props.createCampaignRegistration(model)
            .then(_ => {
                // get new campaign:
                console.log('=== create success campaing res')
                this.props.getCampaign(model.campaignId)
                    .then(campaign => {
                        console.log('=== get current campaign cuccess', campaign)
                        this.emitNewCR(campaign)
                    })
            })
    }

    onShowModal = () => {
        this.setState({isShow: true})
    }

    onHideModal = () => {
        this.setState({isShow: false})
    }

    registerCampaign = (model) => {
        this.onHideModal()
        const camres = this.createCampaignRes(model);
        this.upload(camres)
    }

    createCampaignRes = (model) => {
        const {_id, name} = this.props.current
        return {
            campaignId: _id,
            campaignName: name,
            quantity: model.quantity,
            user: {
                email: model.email,
                name: model.name,
                phoneNumber: model.phone
            }
        }
    }

    ingredients = [
        { nameVn: "Tảo Lục", nameEn: "Chlorella", src: "assets/images/Asset2-8.png", content: "Chứa hơn 20 loại vitamin mang lại sức sống cho đôi mắt mệt mỏi" },
        { nameVn: "Hoa Vô Thường", nameEn: "Hibicus", src: "assets/images/Asset3-8.png", content: "Làm sạch và săn chắc da thông qua quá trình tẩy tế bào chết" },
        { nameVn: "Cải Xoăn", nameEn: "Kale", src: "assets/images/Asset4-8.png", content: "Giữ ấm và làm sạch da thanh lọc và đẩy độc tố ra khỏi cơ thể" }
    ]

    render() {
        const currentCampain = this.props.current
        const {isShow} = this.state;
        return (
            <div className="container" style={{ padding: '30px 0px' }}>
                <div className="row campaign-1">
                    <div className="col-md-6" style={{ padding: '0px' }}>
                        <ProductImage src="assets/images/1(1).jpg" />
                    </div>
                    <div className="col-md-6">
                        {
                            currentCampain ? 
                            <CampaignCard 
                                {...currentCampain} 
                                registerCampaign={this.onShowModal}
                            /> 
                            : null
                        }
                    </div>
                </div>

                {
                    currentCampain ? <CampaignLifeTime {...currentCampain} /> : null
                }
                
                <br /><br />

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

                {
                    isShow && currentCampain ?
                    <RegisterModal 
                        unitPrice={currentCampain.prices[0].price}
                        onHideModal={this.onHideModal}
                        onSubmit={this.registerCampaign}
                    />
                    : null
                }
				

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
        },
        getCampaign: (id) => {
            return dispatchWithLoading(dispatch, getCampaignAction(id))
        },
        getCampaigns: (query) => {
            return dispatchWithLoading(dispatch, getCampaignsAction(query))
        },
        setCurrentCampaign: (campaign) => {
            dispatch(setCurrentCampaignAction(campaign))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Campaign)
