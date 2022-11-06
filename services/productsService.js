const Backery = require("../models/Backery");
const Materials = require("../models/Materials");

function getAllBackery() {
    return Backery.find({});
}

function getAllMaterials() {
    return Materials.find({});
}

function getBackeryById(backeryId) {
    return Backery.findById(backeryId);
}

function getMaterialById(materialId) {
    return Materials.findById(materialId);
}

function addBackery(data) {
    return Backery.create(data);
}

function addMaterials(data) {
    return Materials.create(data);
}

function editBackery(backeryId, data) {
    return Backery.findByIdAndUpdate(backeryId, data);
}

function editMaterial(materialId, data) {
    return Backery.findByIdAndUpdate(materialId, data);
}

function deleteBackery(backeryId) {
    return Backery.findByIdAndRemove(backeryId);
}

function deleteMaterial(materialId) {
    return Backery.findByIdAndRemove(materialId);
}

function checkId(testedId, AllBackeries) {
    let isBakery = false;
    for (let one of AllBackeries) {
        if (one._id == testedId) {
            isBakery = true;
            break;
        }
    }
    return isBakery;
}

module.exports = {
    getAllBackery,
    getAllMaterials,
    getBackeryById,
    getMaterialById,
    addBackery,
    addMaterials,
    editBackery,
    editMaterial,
    deleteBackery,
    deleteMaterial,
    checkId
}