import React, {Component} from 'react'

import styles from './campaign.css'
import ProductImage from '../components/common/product.image'

class Campaign extends Component {
    render(){
        return (
            <div className="container" style={{padding: '30px 0px'}}>
                <div className="row campaign-wr">
                    <div className="col-sm-6">
                        <ProductImage />
                    </div>
                    <div className="col-sm-6">

                    </div>
                </div>
            </div>
        )
    }
}

export default Campaign