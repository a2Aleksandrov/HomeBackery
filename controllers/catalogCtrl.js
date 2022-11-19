const { getGingerbreads, getCakes, getSweets, getfondants, getChocolates, getPoshes, getPaints, getForms, getMoulds, getBoxes } = require('../services/productsService');

const catalogController = require('express').Router();

catalogController.get('/cakes', async (req, res) => {
    const backery = await getCakes().lean();

    res.render('backery', {
        title: 'Cakes Catalog',
        backery,
        user: req.user
    });
});

catalogController.get('/gingerbreads', async (req, res) => {
    const backery = await getGingerbreads().lean();
    
    res.render('backery', {
        title: 'Gingerbreads Catalog',
        backery,
        user: req.user
    });
});

catalogController.get('/sweets', async (req, res) => {
    const backery = await getSweets().lean();

    res.render('backery', {
        title: 'Sweets Catalog',
        backery,
        user: req.user
    });
});

catalogController.get('/fondants', async (req, res) => {
    const materials = await getfondants().lean();
    res.render('materials', {
        title: 'Fondants Catalog',
        materials,
        user: req.user
    });
});

catalogController.get('/chocolates', async (req, res) => {
    const materials = await getChocolates().lean();
    res.render('materials', {
        title: 'Chocolates Catalog',
        materials,
        user: req.user
    });
});

catalogController.get('/posh', async (req, res) => {
    const materials = await getPoshes().lean();
    res.render('materials', {
        title: 'Poshes Catalog',
        materials,
        user: req.user
    });
});

catalogController.get('/paints', async (req, res) => {
    const materials = await getPaints().lean();
    res.render('materials', {
        title: 'Paints Catalog',
        materials,
        user: req.user
    });
});

catalogController.get('/forms', async (req, res) => {
    const materials = await getForms().lean();
    res.render('materials', {
        title: 'Forms Catalog',
        materials,
        user: req.user
    });
});

catalogController.get('/moulds', async (req, res) => {
    const materials = await getMoulds().lean();
    res.render('materials', {
        title: 'Moulds Catalog',
        materials,
        user: req.user
    });
});

catalogController.get('/boxes', async (req, res) => {
    const materials = await getBoxes().lean();
    res.render('materials', {
        title: 'Boxes Catalog',
        materials,
        user: req.user
    });
});

module.exports = catalogController;