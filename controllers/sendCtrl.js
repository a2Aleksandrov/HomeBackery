const sendController = require('express').Router();

sendController.get('/', (req, res) => {
    res.render('send', {
        title: 'Send Page',
        user: req.user
    });
});

module.exports = sendController;
