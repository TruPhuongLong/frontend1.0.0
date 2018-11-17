import {initState} from '../store/state';
import {

} from '../actions/type.action';

export const UserReducer = (state = initState.userState, action) => {
    switch (action.type){
        default:
            return state;
    }
}