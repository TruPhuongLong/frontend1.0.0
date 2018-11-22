import {
    createCampaign,
    getCampaign,
    getCampaigns,
    editCampaign,
    deleteCampaign
} from '../../services/campaign.service';
import {
    GET_CAMPAIGN,
    GET_CAMPAIGNS,
} from './type.action';
import {MESSAGE} from '../../libs/constant'

export const createCampaignAction = (model) => {
    return (dispatch, getState, extraArgument) => {
        return createCampaign(model)
            .then(_ => {
                // if have dispatch will go here
                return MESSAGE.success;
            })
            .catch(_ => {
                throw new Error(MESSAGE.fail)
            })
    }
}

export const getCampaignAction = (id) => {
    return (dispatch, getState, extraArgument) => {
        return getCampaign(id)
            .then(campagn => {
                // if have dispatch will go here
                dispatch({
                    type: GET_CAMPAIGN,
                    payload: campagn
                })
                return MESSAGE.success;
            })
            .catch(_ => {
                throw new Error(MESSAGE.fail)
            })
    }
}

export const getCampaignsAction = (query) => {
    return (dispatch, getState, extraArgument) => {
        return getCampaigns(query)
            .then(campagns => {
                // if have dispatch will go here
                dispatch({
                    type: GET_CAMPAIGNS,
                    payload: campagns
                })
                return MESSAGE.success;
            })
            .catch(_ => {
                throw new Error(MESSAGE.fail)
            })
    }
}

export const editCampaignAction = (id, model) => {
    return (dispatch, getState, extraArgument) => {
        return editCampaign(id, model)
            .then(_ => {
                // if have dispatch will go here
                return MESSAGE.success;
            })
            .catch(_ => {
                throw new Error(MESSAGE.fail)
            })
    }
}

export const deleteCampaignAction = (id) => {
    return (dispatch, getState, extraArgument) => {
        return deleteCampaign(id)
            .then(_ => {
                // if have dispatch will go here
                return MESSAGE.success;
            })
            .catch(_ => {
                throw new Error(MESSAGE.fail)
            })
    }
}