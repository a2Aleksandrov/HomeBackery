const { Schema, model, Types } = require('mongoose');

const materialsSchema = new Schema({
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
        required: true
    },
    owner: {
        type: Types.ObjectId,
        ref: 'User'
    }
});

const Materials = model('Materials', materialsSchema);

module.exports = Materials;