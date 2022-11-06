const { Schema, model, Types } = require('mongoose');

const materialsSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    type: {
        type: String,
        default: 'материали'
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
        required: true
    },
    quantity: {
        type: Number,
        default: 0
    },
    owner: {
        type: Types.ObjectId,
        ref: 'User'
    }
});

const Materials = model('Materials', materialsSchema);

module.exports = Materials;