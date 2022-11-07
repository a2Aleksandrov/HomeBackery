const { getAllOrders } = require('../services/orderService');

const ordersListController = require('express').Router();

ordersListController.get('/', async (req, res) => {
    const orders = await getAllOrders().lean();
    res.render('ordersList', {
        title: 'All Orders',
        user: req.user,
        orders
    });
    console.log(orders);
});

module.exports = ordersListController;