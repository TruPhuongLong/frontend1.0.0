import {combineReducers} from 'redux';

import {CampaignReducer} from './campaign.reducer';
import {CampaignRegistrationReducer} from './campaignRegistration.reducer'
import {OrderReducer} from './order.reducer';
import {ProductReducer} from './product.reducer';
import {AuthReducer} from './auth.reducer';
import {UserReducer} from './user.reducer';
import {StatusReducer} from './status.reducer';

export const rootReducer = combineReducers({
    authState: AuthReducer,
    userState: UserReducer,
    statusState: StatusReducer,
    orderState: OrderReducer, 
    productState: ProductReducer, 
    campaignState: CampaignReducer,
    campaignRegistrationState: CampaignRegistrationReducer,
});