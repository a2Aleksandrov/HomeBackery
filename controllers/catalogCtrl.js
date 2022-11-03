const catalogController = require('express').Router();

catalogController.get('/backery', (req, res) => {
    res.render('backery', {
        title: 'Backery Catalog',
        user: req.user
    });
});

catalogController.get('/mats', (req, res) => {
    res.render('materials', {
        title: 'Materials Catalog',
        user: req.user
    });
});

module.exports = catalogController;