const defaults = {
    _id: '',
    email: '',
    name: '',
    password: '',
    address: '',
    phoneNumber: "", 
    role: ""
}

export class UserModel {
    constructor (options) {
        this._id = options._id || defaults._id;
        this.email = options.email || defaults.email;
        this.name = options.name || defaults.name;
        this.password = options.password || defaults.password;
        this.address = options.address || defaults.address;
        this.phoneNumber = options.phoneNumber || defaults.phoneNumber;
        this.role = options.role || defaults.role;
    } 
}
/**
 * email: {
        type: String,
        unique: true,
        required: true,
        // index: true,
        trim: true
    },
    name: {
        type: String,
    },
    password: {
        type: String,
    },
    address: {
        type: String
    },
    phoneNumber: {
        type: String
    },
    role: {
        type: String
    },
    createAt: {
        type: Number,
        default: Date.now
    },
    editAt: {
        type: Number,
        default: Date.now
    }
 */