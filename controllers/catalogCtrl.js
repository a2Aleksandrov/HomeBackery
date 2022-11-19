const { getGingerbreads, getCakes, getSweets, getfondants, getChocolates, getPoshes, getPaints, getForms, getMoulds, getBoxes } = require('../services/productsService');

const catalogController = require('express').Router();

catalogController.get('/cakes', async (req, res) => {
    try {
        const backery = await getCakes().lean();
        res.render('backery', {
            title: 'Cakes Catalog',
            backery,
            user: req.user
        });
    } catch (error) {

        res.render('error');
    }
});

catalogController.get('/gingerbreads', async (req, res) => {
    try {
        const backery = await getGingerbreads().lean();
        res.render('backery', {
            title: 'Gingerbreads Catalog',
            backery,
            user: req.user
        });
    } catch (error) {

        res.render('error');
    }
});

catalogController.get('/sweets', async (req, res) => {
    try {
        const backery = await getSweets().lean();
        res.render('backery', {
            title: 'Sweets Catalog',
            backery,
            user: req.user
        });
    } catch (error) {

        res.render('error');
    }
});

catalogController.get('/fondants', async (req, res) => {
    try {
        const materials = await getfondants().lean();
        res.render('materials', {
            title: 'Fondants Catalog',
            materials,
            user: req.user
        });
    } catch (error) {

        res.render('error');
    }
});

catalogController.get('/chocolates', async (req, res) => {
    try {
        const materials = await getChocolates().lean();
        res.render('materials', {
            title: 'Chocolates Catalog',
            materials,
            user: req.user
        });
    } catch (error) {

        res.render('error');
    }
});

catalogController.get('/posh', async (req, res) => {
    try {
        const materials = await getPoshes().lean();
        res.render('materials', {
            title: 'Poshes Catalog',
            materials,
            user: req.user
        });
    } catch (error) {

        res.render('error');
    }
});

catalogController.get('/paints', async (req, res) => {
    try {
        const materials = await getPaints().lean();
        res.render('materials', {
            title: 'Paints Catalog',
            materials,
            user: req.user
        });
    } catch (error) {

        res.render('error');
    }
});

catalogController.get('/forms', async (req, res) => {
    try {
        const materials = await getForms().lean();
        res.render('materials', {
            title: 'Forms Catalog',
            materials,
            user: req.user
        });
    } catch (error) {

        res.render('error');
    }
});

catalogController.get('/moulds', async (req, res) => {
    try {
        const materials = await getMoulds().lean();
        res.render('materials', {
            title: 'Moulds Catalog',
            materials,
            user: req.user
        });
    } catch (error) {

        res.render('error');
    }
});

catalogController.get('/boxes', async (req, res) => {
    try {
        const materials = await getBoxes().lean();
        res.render('materials', {
            title: 'Boxes Catalog',
            materials,
            user: req.user
        });
    } catch (error) {

        res.render('error');
    }
});

module.exports = catalogController;