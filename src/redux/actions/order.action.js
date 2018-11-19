import {
    createOrder,
    getOrders,
    getOrdersByEmail
} from '../../services/order.service';

import {
    CREATE_ORDER,
    GET_ORDERS,
    GET_ORDERS_BY_EMAIL,
    SET_CURRENT_ORDER
} from './type.action';
import {MESSAGE} from '../../libs/constant'

export const createOrderAction = (model) => {
    return (dispatch, getState, extraArgument) => {
        return createOrder(model)
            .then(order => {
                // dispatch({
                //     type: CREATE_ORDER,
                //     payload: order
                // })
                return MESSAGE.success;
            })
            .catch(_ => {
                throw new Error(MESSAGE.fail)
            })
    }
}

//test ok
export const getOrdersAction = (query) => {
    return (dispatch, getState, extraArgument) => {
        return getOrders(query)
            .then(orders => {
                dispatch({
                    type: GET_ORDERS,
                    payload: orders
                })
                return MESSAGE.success;
            })
            .catch(_ => {
                throw new Error(MESSAGE.fail)
            })
    }
}

export const getOrdersByEmailAction = (email, query) => {
    return (dispatch, getState, extraArgument) => {
        return getOrdersByEmail(email, query)
            .then(orders => {
                dispatch({
                    type: GET_ORDERS_BY_EMAIL,
                    payload: orders
                })
                return MESSAGE.success;
            })
            .catch(_ => {
                throw new Error(MESSAGE.fail)
            })
    }
}

export const setCurrentOrderAction = (order) => ({
    type: SET_CURRENT_ORDER,
    payload: order
})