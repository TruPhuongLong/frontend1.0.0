import { typeAction } from '../actions/type.action';
import { initState } from '../store/state';

export const UserReducer = (state = initState.userState, action) => {
    switch (action.type) {
        case typeAction.GET_USERS:
            return {
                ...state,
                users: action.payload
            }
        default:
            return state;
    }
}