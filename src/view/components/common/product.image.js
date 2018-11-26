import React from 'react'

import './product.image.css'

export default class ProductImage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            heightAsideContainer: 0
        }
        this.imgMainContainer = React.createRef()
        window.addEventListener('resize', this.onResize)
    }

    onLoadImageMain = (event) => {
        const heightAsideContainer = event.target.offsetHeight;
        this.setState({heightAsideContainer})
    }

    onResize = () => {
        const heightAsideContainer = this.imgMainContainer.current.offsetHeight;
        this.setState({heightAsideContainer})
        // console.log(heightAsideContainer)
    }

    componentWillUnmount(){
        window.removeEventListener('resize', this.onResize)
    }

    render(){
        const heightAside = this.state.heightAsideContainer / 4
        const {src} = this.props
        return (
            <div className="product-image-container">
                <h1>Numero 5. Vital Mask Pack</h1>
                <div className="row">
                    <div className="col-3" >
                        <div className="product-image-aside">
                            <img src={src} alt="" style={{height: heightAside}}/>
                            <img src={src} alt="" style={{height: heightAside}}/>
                            <img src={src} alt="" style={{height: heightAside}}/>
                            <img src={src} alt="" style={{height: heightAside}}/>
                        </div>
                    </div>
                    <div className="col-9 product-image-main" ref={this.imgMainContainer}>
                        <img src={src} alt="" onLoad={this.onLoadImageMain}/>
                    </div>
                </div>
            </div>
        )
    }
}