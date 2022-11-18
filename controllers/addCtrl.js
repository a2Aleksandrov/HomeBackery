const { addBackery, addMaterials, editBackery } = require('../services/productsService');
const { parseError } = require('../util/parser');

const addController = require('express').Router();

addController.get('/', (req, res) => {
    res.render('add', {
        title: 'Add Page',
        user: req.user
    });
});

addController.post('/', async (req, res) => {

    const data = {
        name: req.body.name,
        type: req.body.type,
        img: req.body.img,
        description: req.body.description,
        price: Number(req.body.price).toFixed(2),
        owner: req.user._id
    }

    try {

        if (Object.values(data).some(v => !v)) {
            throw new Error('Всички полета са задължителни.');
        }
        if (req.body.type != 'печива' && req.body.type != 'материали') {
            throw new Error('Типът на продукта трябва да е "печива" или "материали"');
        }
        if (req.body.type == 'печива') {
            await addBackery(data);
            res.redirect('/catalog/backery');
        }
        if (req.body.type == 'материали') {
            await addMaterials(data);
            res.redirect('/catalog/materials');
        }

    } catch (error) {
        res.render('add', {
            title: 'Add Page',
            errors: parseError(error),
            user: req.user,
            data,
            body: {
                type: req.body.type
            }
        });
    }
});

module.exports = addController;