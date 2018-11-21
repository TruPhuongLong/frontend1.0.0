import {get, post, put, remove} from './data.service'
import {
    URL_CAMPAIGNREGISTRATION_BASE,
    URL_CAMPAIGNREGISTRATIONS
} from '../libs/constant'

const createCampaignRegistration = (model) => {
    return post(URL_CAMPAIGNREGISTRATION_BASE, model)
}

const getCampaignRegistration = (id) => {
    return get(URL_CAMPAIGNREGISTRATION_BASE + '/' + id)
}

const getCampaignRegistrations = (query) => {
    return get(URL_CAMPAIGNREGISTRATIONS, (query || ''))
}

const editCampaignRegistration = (id, model) => {
    return put(URL_CAMPAIGNREGISTRATION_BASE + '/' + id, model)
}

const deleteCampaignRegistration = (id) => {
    return remove(URL_CAMPAIGNREGISTRATION_BASE + '/' + id)
}