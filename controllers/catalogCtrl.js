const { getAllBackery, getAllMaterials } = require('../services/productsService');

const catalogController = require('express').Router();

catalogController.get('/backery', async (req, res) => {
    const backery = await getAllBackery().lean();
    res.render('backery', {
        title: 'Backery Catalog',
        user: req.user,
        backery
    });
});

catalogController.get('/mats', async (req, res) => {
    const materials = await getAllMaterials().lean();
    res.render('materials', {
        title: 'Materials Catalog',
        user: req.user,
        materials
    });
});

module.exports = catalogController;