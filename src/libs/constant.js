export const URL_BASE = 'http://localhost:2345/api';

//regular user url:
export const URL_LOGIN = URL_BASE + '/login';
export const URL_SIGNUP = URL_BASE + '/signup';
export const URL_USERS = URL_BASE + '/users';

//url admin:
export const URL_ADMIN_BASE = URL_BASE + '/admin'; // this url use for put /userId and delete /userEmail too.
export const URL_ADMIN_LOGIN = URL_ADMIN_BASE + '/login';
export const URL_ADMIN_SIGNUP_WITH_PERMIT = URL_ADMIN_BASE + '/signupWithPermit';
export const URL_ADMIN_USERS = URL_ADMIN_BASE + '/users';

//Product
export const URL_PRODUCT_BASE = URL_BASE + '/product';
export const URL_PRODUCTS = URL_PRODUCT_BASE + 's';

//Order:
export const URL_ORDER_BASE = URL_BASE + '/order';
export const URL_ORDERS = URL_BASE + 's';








//for upload file:
// importance: name files must be the same in multer:
// example: array('files') -> fd.append('files', f);
export const KEY_FILE_UPLOAD = 'files';

//server will get access_token value from key header
export const HEADER_ACCESS_TOKEN = 'x-access-token';

export const USER = 'USER';





//ROLE
export const ROLES = {
    admin: {
        primary: 'primary',
        secondary: 'secondary'
    },
    regular: {
        new: 'new',
        usually: 'usually',
    }
}

//QUERY
export const QUERY = {
    separateForRange: '*!*!*',
    defaultPagination: 100
}





//MESSAGE:
export const MESSAGE = {
    loginSuccess: 'login success!',
    loginFail: 'login fail',
    signupSuccess: 'signup success!',
    signupFail: 'signup fail',

    success: 'success!',
    fail: 'something went wrong...',
}

