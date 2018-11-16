import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import ProductDetail from './product-detail';
import { ButtonElipse } from './core/button-elipse';



class Product extends React.Component {

    state = {
        showDetail: false
    }

    onDetail = () => {
        this.setState({
            showDetail: true
        })
    }

    onShrink = () => {
        this.setState({
            showDetail: false
        })
    }

    styles = {
        product: {
            textAlign: 'left',
            verticalAlign: 'middle',
            paddingLeft: '5%',
            paddingRight: '2%',
            paddingTop: '2%'
        },
        header: {
            textAlign: 'left',
            marginBottom: '60px',
        },
        content: {
            textAlign: 'left',
            marginBottom: '65px',
        }
    }

    render() {
        const { product } = this.props
        return (
            <section>
                <div className="row">
                    <div className="col-sm-6">
                        <div style={this.styles.product}>
                            <div style={this.styles.header}>
                                <p>{product.nameVietNamese}</p>
                                <h3>{product.nameEnglish}</h3>
                                <span></span>
                            </div>
                            <div style={this.styles.content}>
                                <p>{product.content}</p>
                            </div>
                            <div>
                                <ButtonElipse style={{ backgroundColor: '#d8d8d8' }} onClick={this.onDetail}>xem thêm</ButtonElipse>
                                <ButtonElipse style={{ backgroundColor: '#ffe72c' }} linkTo="/order">sản phẩm</ButtonElipse>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div>
                            <img src={product.imageUrls[0]} alt="" />
                        </div>
                    </div>
                </div>

                {
                    <ReactCSSTransitionGroup transitionName="example">
                        {
                            this.state.showDetail ? <ProductDetail onShrink={this.onShrink} product={product}/> : null
                        }
                    </ReactCSSTransitionGroup>
                }
            </section>
        )
    }

}
export default Product;
