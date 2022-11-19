const Backery = require("../models/Backery");
const Materials = require("../models/Materials");

function getAllBackery() {
    return Backery.find({});
}

function getCakes() {
    return Backery.find({ kind: 'торти' });
}

function getGingerbreads() {
    return Backery.find({ kind: 'меденки' });
}

function getSweets() {
    return Backery.find({ kind: 'сладкиши' });
}

function getAllMaterials() {
    return Materials.find({});
}

function getfondants() {
    return Materials.find({ kind: 'фондани' });
}

function getChocolates() {
    return Materials.find({ kind: 'шоколади' });
}

function getPoshes() {
    return Materials.find({ kind: 'пошове' });
}

function getPaints() {
    return Materials.find({ kind: 'сладкарски бои' });
}

function getForms() {
    return Materials.find({ kind: 'резци и форми' });
}

function getMoulds() {
    return Materials.find({ kind: 'калъпи' });
}

function getBoxes() {
    return Materials.find({ kind: 'кутии и опаковки' });
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
    getCakes,
    getGingerbreads,
    getSweets,
    getBackeryById,
    getAllMaterials,
    getfondants,
    getChocolates,
    getPoshes,
    getPaints,
    getForms,
    getMoulds,
    getBoxes,
    getMaterialById,
    addBackery,
    addMaterials,
    editBackery,
    editMaterial,
    deleteBackery,
    deleteMaterial,
    checkId
}