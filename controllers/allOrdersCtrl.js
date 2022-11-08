const { getAllOrders, deleteOrder } = require('../services/orderService');

const ordersListController = require('express').Router();

ordersListController.get('/', async (req, res) => {
    const orders = await getAllOrders().lean();

    res.render('ordersList', {
        title: 'All Orders',
        user: req.user,
        orders
    });
});

ordersListController.get('/:id/delete', async (req, res) => {
    await deleteOrder(req.params.id);
    res.redirect('/ordersList');
});

module.exports = ordersListController;