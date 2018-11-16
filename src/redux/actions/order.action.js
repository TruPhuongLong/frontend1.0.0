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
        createOrder(model)
            .then(order => {
                dispatch({
                    type: CREATE_ORDER,
                    payload: order
                })
            })
            .catch()
    }
}

export const getOrdersAction = (query) => {
    return (dispatch, getState, extraArgument) => {
        getOrders(query)
            .then(orders => {
                dispatch({
                    type: GET_ORDERS,
                    payload: orders
                })
            })
            .catch()
    }
}

export const getOrdersByEmailAction = (email, query) => {
    return (dispatch, getState, extraArgument) => {
        getOrdersByEmail(email, query)
            .then(orders => {
                dispatch({
                    type: GET_ORDERS_BY_EMAIL,
                    payload: orders
                })
            })
            .catch()
    }
}