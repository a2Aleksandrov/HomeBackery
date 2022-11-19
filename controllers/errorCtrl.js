const errorController = require('express').Router();

errorController.get('/', (req, res) => {
    res.render('error', {
        title: 'Not Found Page',
        user: req.user
    });
});

module.exports = errorController;