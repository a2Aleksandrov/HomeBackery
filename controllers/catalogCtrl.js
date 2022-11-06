const { getAllBackery, getAllMaterials } = require('../services/productsService');

const catalogController = require('express').Router();

catalogController.get('/backery', async (req, res) => {
    const backery = await getAllBackery().lean();
    
    res.render('backery', {
        title: 'Backery Catalog',
        backery,
        user: req.user

    });
});

catalogController.get('/materials', async (req, res) => {
    const materials = await getAllMaterials().lean();
    res.render('materials', {
        title: 'Materials Catalog',
        materials,
        user: req.user
    });
});

module.exports = catalogController;