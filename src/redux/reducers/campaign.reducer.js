import {initState} from '../store/state'
import {
    SET_CURRENT_CAMPAIGN,
    GET_CAMPAIGNS,
    GET_CAMPAIGN
} from '../actions/type.action'

export const CampaignReducer = (state = initState.campaignState, action) => {
    switch(action.type){
        case SET_CURRENT_CAMPAIGN:
        case GET_CAMPAIGN:
            return {
                ...state,
                current: action.payload
            }
        case GET_CAMPAIGNS:
            return {
                ...state,
                list: action.payload,
                current: action.payload[0]
            }
        default:
            return state
    }
} 