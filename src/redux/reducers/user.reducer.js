import {initState} from '../store/state';
import {
    GET_ADMINS,
    GET_USERS,
    SET_CURRENT_USER,
} from '../actions/type.action';

export const UserReducer = (state = initState.userState, action) => {
    switch (action.type){
        case GET_ADMINS:
        case GET_USERS:
            return {
                ...state,
                list: action.payload
            }
        case SET_CURRENT_USER:
            return {
                ...state,
                current: action.payload
            }
        default:
            return state;
    }
}