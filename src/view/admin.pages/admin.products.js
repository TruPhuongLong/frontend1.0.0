import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import './styles.css'
import AdminHeader from '../components/admin.header';
import {getProductsAction, setCurrentProductAction, deleteProductAction} from '../../redux/actions/product.action';
import {dispatchWithLoading} from '../../libs/funcHelp';
import {URL_BASE} from '../../libs/constant'

class AdminProducts extends React.Component {

    componentDidMount(){
        //request list products
        this.props.getProducts()
    }

    onClickEdit = (product) => {
        //save current user in global state
        this.props.setCurrentProduct(product)

        // push to detail page
        this.props.history.push('/admin/editProduct')
    }

    onClickDelete = (product) => {
        const {getProducts, deleteProduct} = this.props;
        deleteProduct(product._id)
            .then(_ => getProducts())
    }

    render(){
        const {list} = this.props
        return (
            <div className="admin-container">
                <div className="container">
                    <AdminHeader title="List products"/>
  
                    <div className="table-responsive">          
                        <table className="table table-hover table-striped">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Image</th>
                                    <th>Name</th>
                                    <th>Price</th>
                                    <th>Unit</th>
                                    <th>Content</th>
                                    <th></th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    list.map((product, index) => {
                                        return (
                                            <tr key={index}>
                                                <td>{index + 1}</td>
                                                <td>
                                                    <img 
                                                        src={product.imageUrls && (URL_BASE + '/' + product.imageUrls[0])} 
                                                        alt="" 
                                                        style={{width: '100px', height: '100px', objectFit: 'contain'}}
                                                    />
                                                </td>
                                                <td>{product.name}</td>
                                                <td>{product.price}</td>
                                                <td>{product.unitPrice}</td>
                                                <td>{product.content}</td>
                                                <td>
                                                    <button 
                                                        className="btn btn-success"
                                                        onClick={() => this.onClickEdit(product)}
                                                    >Edit</button>
                                                </td>
                                                <td>
                                                    <button 
                                                        className="btn btn-danger"
                                                        onClick={() => this.onClickDelete(product)}
                                                    >Delete</button>
                                                </td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    const {list} = state.productState;
    return {list}
}

const mapDispatchToProps = (dispatch) => {
    return {
        getProducts: (query) => {
            return dispatchWithLoading(dispatch, getProductsAction(query))
        },
        setCurrentProduct: (product) => {
            return dispatch(setCurrentProductAction(product))
        },
        deleteProduct: (productId) => {
            return dispatchWithLoading(dispatch, deleteProductAction(productId))
        }
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AdminProducts))