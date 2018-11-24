import {initState} from '../store/state'
import {
    SET_CURRENT_CAMPAIGN
} from '../actions/type.action'

export const CampaignReducer = (state = initState.campaignState, action) => {
    switch(action.type){
        case SET_CURRENT_CAMPAIGN:
            return {
                ...state,
                current: state.payload
            }
        default:
            return state
    }
} 