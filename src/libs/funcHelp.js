import {ROLES} from './constant';
import {START_LOADING, SUCCESS, ERROR} from '../redux/actions/type.action'

export const isAdmin = (role) => {
    return Object.values(ROLES.admin).indexOf(role) !== -1
}

export const dispatchWithLoading = (dispatch, asyncAction) => {
    dispatch({type: START_LOADING})
    
    dispatch(asyncAction)
        .then(res => {
            // console.log('===', res)
            dispatch({
                type: SUCCESS
            })
        })
        .catch(error => {
            dispatch({
                type: ERROR,
                payload: error
            })
        })
}