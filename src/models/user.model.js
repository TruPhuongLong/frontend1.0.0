const defaults = {
    _id: '',
    email: '',
    name: '',
    password: '',
    address: '',
    phoneNumber: "", 
}

export class OrderModel {
    constructor (options) {
        this._id = options._id || defaults._id;
        this.email = options.email || defaults.email;
        this.name = options.name || defaults.name;
        this.password = options.password || defaults.password;
        this.address = options.address || defaults.address;
        this.phoneNumber = options.phoneNumber || defaults.phoneNumber;
    } 
}
