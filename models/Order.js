const { Schema, model, Types } = require('mongoose');


const orderSchema = new Schema({

    client: {
        type: String,
    },
    products: [{
        type: Object
    }],
    totalPrice: {
        type: Number,
        default: 0
    },
    orderedBy: {
        type: Types.ObjectId,
        ref: 'User'
    },
    name: {
        type: String,
        required: true,
        default: '****'
    },
    phone: {
        type: String,
        minlength: [10, 'Телефонният номер трябва да е поне 10 символа.'],
        maxlength: [17, 'Телефонният номер трябва да е максимум 17 символа.'],
        default: '**********'
    },
    address: {
        type: String,
        required: true,
        default: '****'
    },
    accepted: {
        type: Boolean,
        default: false
    }
});

const Order = model('Order', orderSchema);

module.exports = Order;