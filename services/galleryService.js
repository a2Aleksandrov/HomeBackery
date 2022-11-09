const Gallery = require("../models/Gallery");

function getAllImages() {
    return Gallery.find({});
}

function getImageById(imageId) {
    return Gallery.findById(imageId);
}

function addImage(data) {
    return Gallery.create(data);
}

function deleteImage(imageId) {
    return Gallery.findByIdAndRemove(imageId);
}

module.exports = {
    getAllImages,
    getImageById,
    addImage,
    deleteImage
}