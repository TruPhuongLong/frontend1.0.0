import {
    createOrder,
    getOrders,
    getOrdersByEmail
} from '../../services/order.service';

import {
    CREATE_ORDER,
    GET_ORDERS,
    GET_ORDERS_BY_EMAIL
} from './type.action';

export const createOrderAction = (model) => {
    return (dispatch, getState, extraArgument) => {
        return createOrder(model)
            .then(order => {
                return dispatch({
                    type: CREATE_ORDER,
                    payload: order
                })
            })
    }
}

export const getOrdersAction = (query) => {
    return (dispatch, getState, extraArgument) => {
        return getOrders(query)
            .then(orders => {
                return dispatch({
                    type: GET_ORDERS,
                    payload: orders
                })
            })
    }
}

export const getOrdersByEmailAction = (email, query) => {
    return (dispatch, getState, extraArgument) => {
        return getOrdersByEmail(email, query)
            .then(orders => {
                return dispatch({
                    type: GET_ORDERS_BY_EMAIL,
                    payload: orders
                })
            })
    }
}