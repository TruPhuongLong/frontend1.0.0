import {
    signupUser,
    loginUser,
    getUsers,
    loginAdmin,
    signupAdmin,
    getAdmins,
    editAdmin,
    deleteAdmin,
    sendEmail
} from '../../services/user.service';
import { loginContainer, logout } from '../../services/auth.service';
import {
    LOGIN_USER,
    SIGNUP_USER,
    GET_USERS,
    SET_CURRENT_USER,

    LOGOUT,

    //auth
    LOGIN_ADMIN,
    SIGNUP_ADMIN,
    GET_ADMINS,
    EDIT_ADMIN,
    DELETE_ADMIN,
} from './type.action';
import {
    MESSAGE
} from '../../libs/constant';

//USER regular
export const signupUserAction = (model) => {
    return (dispatch, getState, extraArgument) => {
        return signupUser(model)
            .then(user => {
                dispatch({
                    type: SIGNUP_USER,
                    payload: user
                })
                return MESSAGE.signupSuccess;
            })
            .catch(_ => {
                throw new Error(MESSAGE.signupFail)
            })
    }
}

export const loginUserAction = (model) => {
    return (dispatch, getState, extraArgument) => {
        return loginContainer(loginUser(model))
            .then(user => {
                dispatch({
                    type: LOGIN_USER,
                    payload: user
                })
                return MESSAGE.loginSuccess
            })
            .catch(_ => {
                throw new Error(MESSAGE.loginFail)
            })
    }
}

//test ok
export const getUsersAction = (query) => {
    return (dispatch, getState, extraArgument) => {
        return getUsers(query)
            .then(users => {
                dispatch({
                    type: GET_USERS,
                    payload: users
                })
                return MESSAGE.success
            })
            .catch(_ => {
                throw new Error(MESSAGE.someThingWentWrong)
            })
    }
}

export const setCurrentUserAction = (user) => ({
    type: SET_CURRENT_USER,
    payload: user
})

//USER and ADMIN use same /test ok
export const logoutAction = {
    type: LOGOUT
}


//ADMIN
//test ok
export const signupAdminAction = (model) => {
    return (dispatch, getState, extraArgument) => {
        return signupAdmin(model)
            .then(user => {
                console.log('=== signup , get user: ', user)
                //not need dispatch , it not need change state
                // dispatch({
                //     type: SIGNUP_ADMIN,
                //     payload: user
                // })
                return MESSAGE.signupSuccess
            })
            .catch(_ => {
                throw new Error(MESSAGE.signupFail)
            })
    }
}
//test ok
export const loginAdminAction = (model) => {
    return (dispatch, getState, extraArgument) => {
        return loginContainer(loginAdmin(model))
            .then(user => {
                dispatch({
                    type: LOGIN_ADMIN,
                    payload: user
                })
                return MESSAGE.loginSuccess;
            })
            .catch(_ => {
                throw new Error(MESSAGE.loginFail)
            })
    }
}

// test ok
export const getAdminsAction = (query) => {
    return (dispatch, getState, extraArgument) => {
        return getAdmins(query)
            .then(users => {
                // console.log('=== getAdminsAction, users: ', users)
                dispatch({
                    type: GET_ADMINS,
                    payload: users
                })
                return MESSAGE.success
            })
            .catch(_ => {
                throw new Error(MESSAGE.fail)
            })
    }
}

export const editAdminAction = (userId, model) => {
    return (dispatch, getState, extraArgument) => {
        return editAdmin(userId, model)
            .then(user => {
                // will logout .
                dispatch({
                    type: EDIT_ADMIN,
                    payload: user
                })
                return MESSAGE.success
            })
            .catch(_ => {
                throw new Error(MESSAGE.fail)
            })
    }
}

//test ok
export const deleteAdminAction = (userEmail) => {
    return (dispatch, getState, extraArgument) => {
        return deleteAdmin(userEmail)
            .then(res => {
                // not need dispatch any more
                // dispatch({
                //     type: DELETE_ADMIN,
                //     payload: res
                // })
                return MESSAGE.success
            })
            .catch(_ => {
                throw new Error(MESSAGE.fail)
            })
    }
}

export const sendEmailAction = (model) => {
    return (dispatch, getState, extraArgument) => {
        return sendEmail(model)
            .then(_ => MESSAGE.success)
            .catch(_ => {
                throw new Error(MESSAGE.fail)
            })
    }
}
