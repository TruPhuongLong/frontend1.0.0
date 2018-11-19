import {combineReducers} from 'redux';

import {OrderReducer} from './order.reducer';
import {ProductReducer} from './product.reducer';
import {AuthReducer} from './auth.reducer';
import {UserReducer} from './user.reducer';
import {StatusReducer} from './status.reducer';

export const rootReducer = combineReducers({
    orderState: OrderReducer, 
    productState: ProductReducer, 
    authState: AuthReducer,
    userState: UserReducer,
    statusState: StatusReducer,
});