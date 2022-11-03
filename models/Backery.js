const { Schema, model, Types } = require('mongoose');

const backerySchema = new Schema({
    name: {
        type: String,
        required: true
    },
    img: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true,
    },
    likes: {
        type: Types.ObjectId,
        ref: 'User'
    },
    owner: {
        type: Types.ObjectId,
        ref: 'User'
    }
});

const Backery = model('Backery', backerySchema);

module.exports = Backery;