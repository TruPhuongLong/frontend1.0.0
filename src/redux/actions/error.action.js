import { ERROR } from './type.action';

export const errorAction = (mes) => {
    return {
        type: ERROR,
        payload: {
            error: mes
        }
    }
}