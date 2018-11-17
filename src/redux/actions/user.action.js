import {
    signupUser,
    loginUser,
    getUsers,
    loginAdmin,
    signupAdmin,
    getAdmins,
    editAdmin,
    deleteAdmin
} from '../../services/user.service';
import { loginContainer, logout } from '../../services/auth.service';
import {
    LOGIN_USER,
    SIGNUP_USER,
    GET_USERS,

    //auth
    LOGIN_ADMIN,
    SIGNUP_ADMIN,
    GET_ADMINS,
    EDIT_ADMIN,
    DELETE_ADMIN,
} from './type.action';

//user regular
export const signupUserAction = (model) => {
    return (dispatch, getState, extraArgument) => {
        return signupUser(model)
            .then(user => {
                return dispatch({
                    type: SIGNUP_USER,
                    payload: user
                })
            })
    }
}

export const loginUserAction = (model) => {
    return (dispatch, getState, extraArgument) => {
        return loginContainer(loginUser(model))
            .then(user => {
                return dispatch({
                    type: LOGIN_USER,
                    payload: user
                })
            })
    }
}

export const getUsersAction = (query) => {
    return (dispatch, getState, extraArgument) => {
        return getUsers(query)
            .then(users => {
                return dispatch({
                    type: GET_USERS,
                    payload: users
                })
            })
    }
}


//admin
export const signupAdminAction = (model) => {
    return (dispatch, getState, extraArgument) => {
        return signupAdmin(model)
            .then(user => {
                return dispatch({
                    type: SIGNUP_ADMIN,
                    payload: user
                })
            })
    }
}

export const loginAdminAction = (model) => {
    return (dispatch, getState, extraArgument) => {
        return loginContainer(loginAdmin(model))
            .then(user => {
                return dispatch({
                    type: LOGIN_ADMIN,
                    payload: user
                })
            })
    }
}

export const getAdminsAction = (query) => {
    return (dispatch, getState, extraArgument) => {
        return getAdmins(query)
            .then(users => {
                return dispatch({
                    type: GET_ADMINS,
                    payload: users
                })
            })
    }
}

export const editAdminAction = (userId, model) => {
    return (dispatch, getState, extraArgument) => {
        return editAdmin(userId, model)
            .then(user => {
                return dispatch({
                    type: EDIT_ADMIN,
                    payload: user
                })
            })
    }
}

export const deleteAdminAction = (userEmail) => {
    return (dispatch, getState, extraArgument) => {
        return deleteAdmin(userEmail)
            .then(res => {
                return dispatch({
                    type: DELETE_ADMIN,
                    payload: res
                })
            })
    }
}
