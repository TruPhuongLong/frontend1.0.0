import {
    createProduct,
    getProduct,
    getProducts,
    editProduct,
    deleteProduct
} from '../../services/product.service';

import {
    GET_PRODUCTS,
    GET_PRODUCT,
    CREATE_PRODUCT,
    EDIT_PRODUCT,
    DELETE_PRODUCT
} from './type.action';

export const createProductAction = (model, files) => {
    return (dispatch, getState, extraArgument) => {
        return createProduct(model, files)
            .then(product => {
                return dispatch({
                    type: CREATE_PRODUCT,
                    payload: product
                })
            })
    }
}

export const getProductAction = (productId) => {
    return (dispatch, getState, extraArgument) => {
        return getProduct(productId)
            .then(product => {
                return dispatch({
                    type: GET_PRODUCT,
                    payload: product
                })
            })
    }
}

export const getProductsAction = (query) => {
    return (dispatch, getState, extraArgument) => {
        return getProducts(query)
            .then(products => {
                return dispatch({
                    type: GET_PRODUCTS,
                    payload: products
                })
            })
    }
}

export const editProductAction = (productId, model) => {
    return (dispatch, getState, extraArgument) => {
        return editProduct(productId, model)
            .then(product => {
                return dispatch({
                    type: EDIT_PRODUCT,
                    payload: product
                })
            })
    }
}

export const deleteProductAction = (productId) => {
    return (dispatch, getState, extraArgument) => {
        return deleteProduct(productId)
            .then(product => {
                return dispatch({
                    type: DELETE_PRODUCT,
                    payload: product
                })
            })
    }
}