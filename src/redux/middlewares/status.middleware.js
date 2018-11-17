import {START_LOADING} from '../actions/type.action';

const statusMiddleware = store => next => action => {
    // store.dispatch({
    //     type: START_LOADING
    // })
    next(action)
}

export default statusMiddleware;