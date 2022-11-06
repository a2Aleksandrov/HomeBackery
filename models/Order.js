const { Schema, model } = require('mongoose');


const orderSchema = new Schema({

    client: {
        type: String,
        ref: 'User'
    },
    products: [{
        type: Object
    }],
    totalPrice: {
        type: Number,
        default: 0
    }
});

const Order = model ('Order', orderSchema);

module.exports = Order;