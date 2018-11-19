import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import './styles.css'
import AdminHeader from '../components/admin.header';
import {getProductsAction, setCurrentProductAction, deleteProductAction} from '../../redux/actions/product.action';
import {dispatchWithLoading} from '../../libs/funcHelp';
import ListProducts from '../components/list.products'

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
  
                    <ListProducts list={list} onClickEdit={this.onClickEdit} onClickDelete={this.onClickDelete} />
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