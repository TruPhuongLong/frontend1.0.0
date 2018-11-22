import {
    createCampaignRegistration,
    getCampaignRegistration,
    getCampaignRegistrations,
    editCampaignRegistration,
    deleteCampaignRegistration
} from '../../services/campaignRegistration'
import {
    GET_CAMPAIGNREGISTRATIONS,
    GET_CAMPAIGNREGISTRATION
} from './type.action'
import {MESSAGE} from '../../libs/constant'


export const createCampaignRegistrationAction = (model) => {
    return (dispatch, getState, extraArgument) => {
        return createCampaignRegistration(model)
            .then(_ => {
                // if have dispatch will go here
                return MESSAGE.success;
            })
            .catch(_ => {
                throw new Error(MESSAGE.fail)
            })
    }
}

export const getCampaignRegistrationAction = (id) => {
    return (dispatch, getState, extraArgument) => {
        return getCampaignRegistration(id)
            .then(campagnRegistration => {
                // if have dispatch will go here
                dispatch({
                    type: GET_CAMPAIGNREGISTRATION,
                    payload: campagnRegistration
                })
                return MESSAGE.success;
            })
            .catch(_ => {
                throw new Error(MESSAGE.fail)
            })
    }
}

export const getCampaignRegistrationsAction = (query) => {
    return (dispatch, getState, extraArgument) => {
        return getCampaignRegistrations(query)
            .then(campagnRegistrations => {
                // if have dispatch will go here
                dispatch({
                    type: GET_CAMPAIGNREGISTRATIONS,
                    payload: campagnRegistrations
                })
                return MESSAGE.success;
            })
            .catch(_ => {
                throw new Error(MESSAGE.fail)
            })
    }
}

export const editCampaignRegistrationAction = (id, model) => {
    return (dispatch, getState, extraArgument) => {
        return editCampaignRegistration(id, model)
            .then(_ => {
                // if have dispatch will go here
                return MESSAGE.success;
            })
            .catch(_ => {
                throw new Error(MESSAGE.fail)
            })
    }
}

export const deleteCampaignRegistrationAction = (id) => {
    return (dispatch, getState, extraArgument) => {
        return deleteCampaignRegistration(id)
            .then(_ => {
                // if have dispatch will go here
                return MESSAGE.success;
            })
            .catch(_ => {
                throw new Error(MESSAGE.fail)
            })
    }
}