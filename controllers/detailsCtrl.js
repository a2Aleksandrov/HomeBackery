const { getAllBackery, getBackeryById, getMaterialById, checkId } = require('../services/productsService');

const detailsController = require('express').Router();

detailsController.get('/:id', async (req, res) => {

    const AllBackeries = await getAllBackery();

    let isBackery = checkId(req.params.id, AllBackeries);
    if (isBackery) {
        const backery = await getBackeryById(req.params.id).lean();
        res.render('detailsB', {
            title: 'Details Page',
            user: req.user,
            backery
        });
    } else {
        const material = await getMaterialById(req.params.id).lean();
        res.render('detailsM', {
            title: 'Details Page',
            user: req.user,
            material
        });
    }

});

module.exports = detailsController;