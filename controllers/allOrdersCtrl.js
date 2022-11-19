const { getAllOrders, deleteOrder } = require('../services/orderService');

const ordersListController = require('express').Router();

ordersListController.get('/', async (req, res) => {
    try {
        const orders = await getAllOrders().lean();
        res.render('ordersList', {
            title: 'All Orders',
            user: req.user,
            orders
        });
    } catch (error) {
        res.render('error');
    }
});

ordersListController.get('/:id/delete', async (req, res) => {
    try {
        await deleteOrder(req.params.id);
        res.redirect('/ordersList');
    } catch (error) {
        res.render('error');
    }
});

module.exports = ordersListController;