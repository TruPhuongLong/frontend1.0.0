import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

import {rootReducer} from '../reducers/index';
import {messageMiddleware} from '../middlewares/message.middleware';

export const store = createStore(
    rootReducer,
    applyMiddleware(
        messageMiddleware,
        thunk
    )
)
