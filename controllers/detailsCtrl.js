const { getAllBackery, getBackeryById, getMaterialById, checkId, editBackery } = require('../services/productsService');

const detailsController = require('express').Router();

detailsController.get('/:id', async (req, res) => {
    try {
        const AllBackeries = await getAllBackery();

        let isBackery = checkId(req.params.id, AllBackeries);
        if (isBackery) {
            const backery = await getBackeryById(req.params.id).lean();

            let hasLiked = false;
            const parsedIds = backery.likedBy.map(id => id.toString());
            if (req.user && parsedIds.includes(req.user._id)) {
                hasLiked = true;
            }

            res.render('detailsB', {
                title: 'Details Page',
                user: req.user,
                backery,
                hasLiked
            });

        } else {
            const material = await getMaterialById(req.params.id).lean();
            res.render('detailsM', {
                title: 'Details Page',
                user: req.user,
                material
            });
        }
    } catch (error) {
        res.render('error');
    }
});

detailsController.post('/:id/', async (req, res) => {
    try {
        const backery = await getBackeryById(req.params.id);
        backery.likes++;
        const data = {
            likes: backery.likes,
            likedBy: req.user._id
        }
        await editBackery(req.params.id, data);
        res.redirect('/details/' + req.params.id);
    } catch (error) {
        res.render('error');
    }
});

module.exports = detailsController;