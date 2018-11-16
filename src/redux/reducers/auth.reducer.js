import { typeAction } from '../actions/type.action';
import { initState } from '../store/state';

export const AuthReducer = (state = initState.authState, action) => {
    switch (action.type) {
        case typeAction.LOGIN:
            return {
                ...state,
                isAuth: action.payload.isAuth,
                user: action.payload.user,
            }
        
        case typeAction.LOGOUT:
            return {
                ...state,
                isAuth: action.payload.isAuth,
                user: action.payload.user,
            }
        default:
            return state;
    }
}