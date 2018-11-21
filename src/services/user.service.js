import {get, post, put, remove} from './data.service';
import {
    //regular user
    URL_LOGIN, 
    URL_SIGNUP, 
    URL_USERS, 

    //admin
    URL_ADMIN_BASE, 
    URL_ADMIN_LOGIN, 
    URL_ADMIN_SIGNUP_WITH_PERMIT, 
    URL_ADMIN_USERS
} from '../libs/constant';

//regular
export const signupUser = (model) => {
    return post(URL_SIGNUP, {user: model})
}

export const loginUser = (model) => {
    return post(URL_LOGIN, {user: model})
}

export const getUsers = (query) => {
    return get(URL_USERS + (query || ''))
}


//admin

export const loginAdmin = (model) => {
    return post(URL_ADMIN_LOGIN, {user: model})
}

// only primary admin can do:
export const signupAdmin = (model) => {
    return post(URL_ADMIN_SIGNUP_WITH_PERMIT, {user: model})
}

// only primary admin can do:
export const getAdmins = (query) => {
    const url = URL_ADMIN_USERS + (query || '')
    return get(url)
}

export const editAdmin = (userId, model) => {
    return put(URL_ADMIN_BASE + '/' + userId, {user: model})
}

export const deleteAdmin = (userEmail) => {
    return remove(URL_ADMIN_BASE + '/' + userEmail)
}

