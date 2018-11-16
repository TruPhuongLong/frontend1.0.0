import { initState } from '../store/state';
import { typeAction } from '../actions/type.action';

export const OrderReducer = (state = initState.orderState, action) => {
    switch (action.type) {
        case typeAction.GET_ORDERS:
            return {

            }

        case typeAction.GET_ORDER:
            return {

            }

        case typeAction.POST_ORDER:
            return {
                ...state,
                current: action.payload
            }

        default: return state;
    }
}