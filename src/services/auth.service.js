import { HEADER_ACCESS_TOKEN } from '../libs/constant';

export const loginContainer = (login) => {
    return login
        .then(({ user, token }) => {
            if (user && token) {
                localStorage.setItem(HEADER_ACCESS_TOKEN, token);
                return user;
            }
        })
        .catch(error => console.log(error))
}

export const logout = () => {
    localStorage.setItem(HEADER_ACCESS_TOKEN, null);
}