import UserModel from './user.model';

const defaults = {
    _id: '',
    listOrder: [],
    priceShip: 0,
    priceTotal: 0,
    user: null,
    createAt: 0,
}

export class OrderModel {
    constructor (options) {
        this._id = options._id || defaults._id;
        this.listOrder = options.listOrder || defaults.listOrder;
        this.priceShip = options.priceShip || defaults.priceShip;
        this.priceTotal = options.priceTotal || defaults.priceTotal;
        this.user = options.user || defaults.user;
        this.createAt = options.createAt || defaults.createAt;
    } 
}

// listOrder: [
//     {
//         productId: {
//             type: String,
//             trim: true,
//         },
//         quantity: {
//             type: Number,
//             trim: true,
//             minlength: 1,
//         }
//     }
// ]

/**
 * {
    "_id": "5bf273abf306e11bbc2416e4",
    "listOrder": [
        {
            "_id": "5bf273abf306e11bbc2416e6",
            "productId": "5bf26d09785ae104c866c41e",
            "quantity": 2
        },
        {
            "_id": "5bf273abf306e11bbc2416e5",
            "productId": "5bf26fec785ae104c866c41f",
            "quantity": 2
        }
    ],
    "priceShip": 100,
    "priceTotal": 200,
    "userEmail": "1peter@gmail.com",
    "createAt": 1542615979184,
    "__v": 0
}
 */
