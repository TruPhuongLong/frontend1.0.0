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
    DELETE_PRODUCT,
    SET_CURRENT_PRODUCT
} from './type.action';
import {
    MESSAGE
} from '../../libs/constant'

// test ok
export const createProductAction = (model, files) => {
    return (dispatch, getState, extraArgument) => {
        return createProduct(model, files)
            .then(product => {
                // dispatch({
                //     type: CREATE_PRODUCT,
                //     payload: product
                // })
                return MESSAGE.success;
            })
            .catch(_ => {
                throw new Error(MESSAGE.fail)
            })
    }
}

export const getProductAction = (productId) => {
    return (dispatch, getState, extraArgument) => {
        return getProduct(productId)
            .then(product => {
                dispatch({
                    type: GET_PRODUCT,
                    payload: product
                })
                return MESSAGE.success;
            })
            .catch(_ => {
                throw new Error(MESSAGE.fail)
            })
    }
}

//test ok
export const getProductsAction = (query) => {
    return (dispatch, getState, extraArgument) => {
        return getProducts(query)
            .then(products => {
                dispatch({
                    type: GET_PRODUCTS,
                    payload: products
                })
                return MESSAGE.success;
            })
            .catch(_ => {
                throw new Error(MESSAGE.fail)
            })
    }
}

export const editProductAction = (productId, model, files) => {
    return (dispatch, getState, extraArgument) => {
        return editProduct(productId, model, files) 
            .then(product => {
                dispatch({
                    type: EDIT_PRODUCT,
                    payload: product
                })
                return MESSAGE.success;
            })
            .catch(_ => {
                throw new Error(MESSAGE.fail)
            })
    }
}

export const deleteProductAction = (productId) => {
    return (dispatch, getState, extraArgument) => {
        return deleteProduct(productId)
            .then(product => {
                dispatch({
                    type: DELETE_PRODUCT,
                    payload: product
                })
                return MESSAGE.success;
            })
            .catch(_ => {
                throw new Error(MESSAGE.fail)
            })
    }
}

//test ok
export const setCurrentProductAction = (product) => ({
    type: SET_CURRENT_PRODUCT,
    payload: product
})