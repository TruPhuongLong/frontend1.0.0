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
        createProduct(model, files)
            .then(product => {
                dispatch({
                    type: CREATE_PRODUCT,
                    payload: product
                })
            })
            .catch()
    }
}

export const getProductAction = (productId) => {
    return (dispatch, getState, extraArgument) => {
        getProduct(productId)
            .then(product => {
                dispatch({
                    type: GET_PRODUCT,
                    payload: product
                })
            })
            .catch()
    }
}

export const getProductsAction = (query) => {
    return (dispatch, getState, extraArgument) => {
        getProducts(query)
            .then(products => {
                dispatch({
                    type: GET_PRODUCTS,
                    payload: products
                })
            })
            .catch()
    }
}

export const editProductAction = (productId, model) => {
    return (dispatch, getState, extraArgument) => {
        editProduct(productId, model)
            .then(product => {
                dispatch({
                    type: EDIT_PRODUCT,
                    payload: product
                })
            })
            .catch()
    }
}

export const deleteProductAction = (productId) => {
    return (dispatch, getState, extraArgument) => {
        deleteProduct(productId)
            .then(product => {
                dispatch({
                    type: DELETE_PRODUCT,
                    payload: product
                })
            })
            .catch()
    }
}