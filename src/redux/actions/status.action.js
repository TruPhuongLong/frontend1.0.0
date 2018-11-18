import {
    START_LOADING,
    ERROR,
    SUCCESS,
    CLEAR_STATUS
} from './type.action';

export const startLoadingAction = {
    type: START_LOADING,
    payload: {
        isLoading: true,
    }
}

export const errorAction = (error) => ({
    type: ERROR,
    payload: {
        isLoading: false,
        status: error
    }
})

export const successAction = (mes = 'success') => ({
    type: SUCCESS,
    payload: {
        isLoading: false,
        status: mes
    }
})

export const clearStatusAction = {
    type: CLEAR_STATUS,
    payload: {
        status: null
    }
}

