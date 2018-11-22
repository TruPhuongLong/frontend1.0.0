import {get, post, put, remove} from './data.service'
import {
    URL_CAMPAIGN_BASE,
    URL_CAMPAIGNS
} from '../libs/constant'

export const createCampaign = (model) => {
    return post(URL_CAMPAIGN_BASE, model)
}

export const getCampaign = (id) => {
    return get(URL_CAMPAIGN_BASE + '/' + id)
}

export const getCampaigns = (query) => {
    return get(URL_CAMPAIGNS, (query || ''))
}

export const editCampaign = (id, model) => {
    return put(URL_CAMPAIGN_BASE + '/' + id, model)
}

export const deleteCampaign = (id) => {
    return remove(URL_CAMPAIGN_BASE + '/' + id)
}