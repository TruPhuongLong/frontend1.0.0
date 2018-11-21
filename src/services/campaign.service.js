import {get, post, put, remove} from './data.service'
import {
    URL_CAMPAIGN_BASE,
    URL_CAMPAIGNS
} from '../libs/constant'

const createCampaign = (model) => {
    return post(URL_CAMPAIGN_BASE, model)
}

const getCampaign = (id) => {
    return get(URL_CAMPAIGN_BASE + '/' + id)
}

const getCampaigns = (query) => {
    return get(URL_CAMPAIGNS, (query || ''))
}

const editCampaign = (id, model) => {
    return put(URL_CAMPAIGN_BASE + '/' + id, model)
}

const deleteCampaign = (id) => {
    return remove(URL_CAMPAIGN_BASE + '/' + id)
}