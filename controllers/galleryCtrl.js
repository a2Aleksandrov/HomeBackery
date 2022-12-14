const { getAllImages, addImage } = require('../services/galleryService');
const { parseError } = require('../util/parser');

const galleryController = require('express').Router();

galleryController.get('/', async (req, res) => {
    const images = await getAllImages().lean();
    
    res.render('gallery', {
        title: 'Gallery Page',
        user: req.user,
        images
    });
});

galleryController.post('/', async (req, res) => {
    const images = await getAllImages().lean();

    const data = {
        img: req.body.img
    }
    try {
        if (data.img == '') {
            throw new Error('Моля въведете снимка.')
        }
        await addImage(data);
        res.redirect('/gallery');
    } catch (error) {
        res.render('gallery', {
            title: 'Gallery Page',
            user: req.user,
            errors: parseError(error),
            images
        });
    }
});

module.exports = galleryController;