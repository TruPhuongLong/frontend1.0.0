import {get, post} from './data.service';
import {URL_ORDER_BASE, URL_ORDERS} from '../libs/constant';

export const createOrder = (model) => {
    return post(URL_ORDER_BASE, model)
}

export const getOrders = (query) => {
    return get(URL_ORDERS + (query || ''))
}

export const getOrdersByEmail = (email, query) => {
    return get(URL_ORDERS + '/' + email + (query || ''))
}