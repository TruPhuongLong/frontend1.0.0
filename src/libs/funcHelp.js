import {ROLES} from './constant';
// import {START_LOADING, SUCCESS, ERROR, CLEAR_STATUS} from '../redux/actions/type.action'
import {
    startLoadingAction,
    errorAction,
    successAction,
    clearStatusAction
} from '../redux/actions/status.action';

export const isAdmin = (user) => {
    if(!user) return false;
    return Object.values(ROLES.admin).indexOf(user.role) !== -1
}

export const isAdminPrimary = (user) => {
    if(!user) return false;
    return user.role === ROLES.admin.primary
}

let timeoutId;
function deleteStatus(dispatch){
    if(timeoutId) {
        console.log('=== clear timeout id: ', timeoutId)
        clearTimeout(timeoutId)
    }
    timeoutId = setTimeout(() => {
        dispatch(clearStatusAction)
    }, 5000)
}

export const dispatchWithLoading = (dispatch, asyncAction) => {
    dispatch(startLoadingAction)
    
    return dispatch(asyncAction)
        .then(res => {
            console.log('=== dispatchWithLoading success with res: ', res)
            dispatch(successAction((res && res instanceof String && res) || 'success'))
            deleteStatus(dispatch)
            return res;
        })
        .catch(error => {
            console.log('=== dispatchWithLoading, error is: ', error)
            dispatch(errorAction(error))
            deleteStatus(dispatch)
            return error
        })
}