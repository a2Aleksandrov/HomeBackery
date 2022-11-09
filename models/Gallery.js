const { Schema, model } = require('mongoose');

const gallerySchema = new Schema({
    img: {
        type: String,
        required: true
    }
});

const Gallery = model('Gallery', gallerySchema);

module.exports = Gallery;