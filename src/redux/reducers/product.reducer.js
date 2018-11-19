import {initState} from '../store/state'
import {
    GET_PRODUCTS,
    GET_PRODUCT,
    CREATE_PRODUCT,
    EDIT_PRODUCT,
    DELETE_PRODUCT,
    SET_CURRENT_PRODUCT
} from '../actions/type.action'

export const ProductReducer = (state = initState.productState, action) => {
    switch(action.type){
        case GET_PRODUCT:
        case EDIT_PRODUCT:
        case SET_CURRENT_PRODUCT:
            return {
                ...state,
                current: action.payload
            }
        case GET_PRODUCTS:
            return {
                ...state,
                list: action.payload
            }
        case DELETE_PRODUCT:
            return {
                ...state,
                current: null
            }
        default:
            return state
    }
}