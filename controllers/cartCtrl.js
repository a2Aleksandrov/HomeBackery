const { getOrderByUser, deleteOrder } = require('../services/orderService');

const cartController = require('express').Router();

cartController.get('/order', async (req, res) => {
    const order = await getOrderByUser(req.user.email).lean();

    res.render('cart', {
        title: 'Cart Page',
        user: req.user,
        order
    });
});

cartController.get('/order/delete', async (req, res) => {
    const order = await getOrderByUser(req.user.email);
    await deleteOrder(order._id);
    res.redirect('/catalog/backery');
});

module.exports = cartController;

