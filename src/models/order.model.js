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
