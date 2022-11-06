const { getAllOrders } = require('../services/orderService');

const cartController = require('express').Router();

cartController.get('/orders', async (req, res) => {
    const orders = await getAllOrders().lean();
    console.log(orders);

    res.render('cart', {
        title: 'Cart Page',
        user: req.user,
        orders
    });
});

module.exports = cartController;