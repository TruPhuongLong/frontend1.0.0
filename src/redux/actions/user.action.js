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
        signupUser(model)
            .then(user => {
                dispatch({
                    type: SIGNUP_USER,
                    payload: user
                })
            })
            .catch()
    }
}

export const loginUserAction = (model) => {
    return (dispatch, getState, extraArgument) => {
        loginContainer(loginUser(model))
            .then(user => {
                dispatch({
                    type: LOGIN_USER,
                    payload: user
                })
            })
            .catch()
    }
}

export const getUsersAction = (query) => {
    return (dispatch, getState, extraArgument) => {
        getUsers(query)
            .then(users => {
                dispatch({
                    type: GET_USERS,
                    payload: users
                })
            })
            .catch()
    }
}


//admin
export const signupAdminAction = (model) => {
    return (dispatch, getState, extraArgument) => {
        signupAdmin(model)
            .then(user => {
                dispatch({
                    type: SIGNUP_ADMIN,
                    payload: user
                })
            })
            .catch()
    }
}

export const loginAdminAction = (model) => {
    return (dispatch, getState, extraArgument) => {
        loginContainer(loginAdmin(model))
            .then(user => {
                dispatch({
                    type: LOGIN_ADMIN,
                    payload: user
                })
            })
            .catch()
    }
}




export const getAdminsAction = (query) => {
    return (dispatch, getState, extraArgument) => {
        getAdmins(query)
            .then(users => {
                dispatch(users);
                dispatch({
                    type: GET_ADMINS,
                    payload: users
                })
            })
            .catch()
    }
}

export const editAdminAction = (userId, model) => {
    return (dispatch, getState, extraArgument) => {
        editAdmin(userId, model)
            .then(user => {
                dispatch({
                    type: EDIT_ADMIN,
                    payload: user
                })
            })
            .catch()
    }
}

export const deleteAdminAction = (userEmail) => {
    return (dispatch, getState, extraArgument) => {
        deleteAdmin(userEmail)
            .then(res => {
                dispatch({
                    type: DELETE_ADMIN,
                    payload: res
                })
            })
            .catch()
    }
}
