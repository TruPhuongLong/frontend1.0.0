import {initState} from '../store/state'
import {
    START_LOADING,
    ERROR,
    SUCCESS,
    CLEAR_STATUS
} from '../actions/type.action'

export const StatusReducer = (state = initState.statusState, action) => {
    switch(action.type){
        case START_LOADING:
        case ERROR:
        case SUCCESS:
        case CLEAR_STATUS:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state
    }
}
