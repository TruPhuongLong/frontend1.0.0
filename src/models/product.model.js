const defaults = {
    _id: '',
    name: '',
    nameVietNamese: '',
    nameEnglish: '',
    price: 0,
    unitPrice: '',
    content: '',
    contentDetail: '',
    imageUrls: [],
    videoUrls: [],
    createAt: 0,
    editAt: 0,
    userId: ''
}

export class ProductModel {
    constructor (options) {
        if(!options) options = {};
        this._id = options._id || defaults._id;
        this.name = options.name || defaults.name;
        this.nameVietNamese = options.nameVietNamese || defaults.nameVietNamese;
        this.nameEnglish = options.nameEnglish || defaults.nameEnglish;
        this.price = options.price || defaults.price;
        this.unitPrice = options.unitPrice || defaults.unitPrice;
        this.content = options.content || defaults.content;
        this.contentDetail = options.contentDetail || defaults.contentDetail;
        this.imageUrls = options.imageUrls || defaults.imageUrls;
        this.createAt = options.createAt || defaults.createAt;
        this.editAt = options.editAt || defaults.editAt;
        this.userId = options.userId || defaults.userId;
    }
}