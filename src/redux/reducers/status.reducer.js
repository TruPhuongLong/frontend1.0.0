import {initState} from '../store/state'
import {START_LOADING, ERROR, SUCCESS} from '../actions/type.action';

export const StatusReducer = (state = initState.statusState, action) => {
    switch(action.type){
        case START_LOADING:
            return {
                ...state,
                isLoading: true
            }
        case ERROR:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            }
        case SUCCESS:
            return {
                ...state,
                isLoading: false,
                error: null
            }
        default: 
            return state
    }
}