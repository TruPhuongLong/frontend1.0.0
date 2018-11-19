import {get, postForm, putForm, remove} from './data.service';
import {URL_PRODUCT_BASE, URL_PRODUCTS} from '../libs/constant';

export const createProduct = (model, files) => {
    return postForm(URL_PRODUCT_BASE, model, files);
}

export const getProduct = (productId) => {
    return get(URL_PRODUCT_BASE + '/' + productId)
}

export const getProducts = (query) => {
    return get(URL_PRODUCTS + (query || ''));
}

export const editProduct = (productId, model, files) => {
    return putForm(URL_PRODUCT_BASE + '/' + productId, model, files)
}

export const deleteProduct = (productId) => {
    return remove(URL_PRODUCT_BASE + '/' + productId)
}