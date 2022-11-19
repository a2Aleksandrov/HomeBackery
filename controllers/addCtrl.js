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
        kind: req.body.kind,
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

            if (data.kind == 'торти') {
                res.redirect('/catalog/cakes');
            }
            if (data.kind == 'меденки') {
                res.redirect('/catalog/gingerbreads');
            }
            if (data.kind == 'сладкиши') {
                res.redirect('/catalog/sweets');
            }
        }
        if (req.body.type == 'материали') {
            await addMaterials(data);

            if (data.kind == 'фондани') {
                res.redirect('/catalog/fondants');
            }
            if (data.kind == 'шоколади') {
                res.redirect('/catalog/chocolates');
            }
            if (data.kind == 'пошове') {
                res.redirect('/catalog/posh');
            }
            if (data.kind == 'сладкарски бои') {
                res.redirect('/catalog/paints');
            }
            if (data.kind == 'резци и форми') {
                res.redirect('/catalog/forms');
            }
            if (data.kind == 'калъпи') {
                res.redirect('/catalog/moulds');
            }
            if (data.kind == 'кутии и опаковки') {
                res.redirect('/catalog/boxes');
            }
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