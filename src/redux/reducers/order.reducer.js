import {initState} from '../store/state'
import {
    GET_ORDERS,
    GET_ORDERS_BY_EMAIL,
    SET_CURRENT_ORDER
} from '../actions/type.action'

export const OrderReducer = (state = initState.orderState, action) => {
    switch(action.type){
        case GET_ORDERS:
        case GET_ORDERS_BY_EMAIL:
            return {
                ...state,
                list: action.payload
            }
        case SET_CURRENT_ORDER:
            return {
                ...state,
                current: action.payload
            }
        default:
            return state
    }
}