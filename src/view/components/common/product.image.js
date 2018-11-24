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
        console.log(heightAsideContainer)
    }

    componentWillUnmount(){
        window.removeEventListener('resize')
    }

    render(){
        const heightAside = this.state.heightAsideContainer / 4
        return (
            <div className="product-image-container">
                <h2>Numero 5. Vital Mask Pack</h2>
                <div className="row">
                    <div className="col-3" >
                        <div className="product-image-aside">
                            <img src="assets/images/1(1).jpg" alt="" style={{height: heightAside}}/>
                            <img src="assets/images/1(1).jpg" alt="" style={{height: heightAside}}/>
                            <img src="assets/images/1(1).jpg" alt="" style={{height: heightAside}}/>
                            <img src="assets/images/1(1).jpg" alt="" style={{height: heightAside}}/>
                        </div>
                    </div>
                    <div className="col-9 product-image-main" ref={this.imgMainContainer}>
                        <img src="assets/images/1(1).jpg" alt="" onLoad={this.onLoadImageMain}/>
                    </div>
                </div>
            </div>
        )
    }
}