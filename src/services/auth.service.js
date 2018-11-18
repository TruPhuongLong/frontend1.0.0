import { HEADER_ACCESS_TOKEN, USER } from '../libs/constant';

export const loginContainer = (login) => {
    return login
        .then(({ user, token }) => {
            if (user && token) {
                localStorage.setItem(HEADER_ACCESS_TOKEN, token);
                localStorage.setItem(USER, JSON.stringify(user))
                return user;
            }
        }) 
}

export const logout = () => {
    localStorage.setItem(HEADER_ACCESS_TOKEN, null);
    localStorage.setItem(USER, null)
}