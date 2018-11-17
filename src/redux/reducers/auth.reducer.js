import {initState} from '../store/state';
import {
    LOGIN_ADMIN
} from '../actions/type.action';
import {isAdmin} from '../../libs/funcHelp';

export const AuthReducer = (state = initState.authState, action) => {
    switch (action.type){
        case LOGIN_ADMIN:
            const user = action.payload;
            if(user && isAdmin(user.role)){
                return {
                    isAdmin: true,
                    user: action.payload
                }
            }
            return state;
        default:
            return state;
    }
}