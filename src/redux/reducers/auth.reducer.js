import {initState} from '../store/state';
import {
    LOGIN_ADMIN,
    EDIT_ADMIN,

    LOGOUT
} from '../actions/type.action';
import {isAdmin} from '../../libs/funcHelp';

export const AuthReducer = (state = initState.authState, action) => {
    switch (action.type){
        case LOGIN_ADMIN:
            console.log('=== AuthReducer,case LOGIN_ADMIN')
            const user = action.payload;
            if(user && isAdmin(user)){
                return {
                    isAdmin: true,
                    user: action.payload
                }
            }
            return state;
        case EDIT_ADMIN:
        case LOGOUT:
            return {
                isAdmin: false,
                user: null
            }
        default:
            return state;
    }
}