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
    accepted: {
        type: Boolean,
        default: false
    }
});

const Order = model('Order', orderSchema);

module.exports = Order;