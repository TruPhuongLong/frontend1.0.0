import {get, post, put, remove} from './data.service'
import {
    URL_CAMPAIGNREGISTRATION_BASE,
    URL_CAMPAIGNREGISTRATIONS
} from '../libs/constant'

export const createCampaignRegistration = (model) => {
    return post(URL_CAMPAIGNREGISTRATION_BASE, model)
}

export const getCampaignRegistration = (id) => {
    return get(URL_CAMPAIGNREGISTRATION_BASE + '/' + id)
}

export const getCampaignRegistrations = (query) => {
    return get(URL_CAMPAIGNREGISTRATIONS, (query || ''))
}

export const editCampaignRegistration = (id, model) => {
    return put(URL_CAMPAIGNREGISTRATION_BASE + '/' + id, model)
}

export const deleteCampaignRegistration = (id) => {
    return remove(URL_CAMPAIGNREGISTRATION_BASE + '/' + id)
}