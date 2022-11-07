const { createOrder, updateOrder, getOrderByUser } = require('../services/orderService');
const { getAllBackery, checkId, getBackeryById, getMaterialById } = require('../services/productsService');
const { parseError } = require('../util/parser');

const orderController = require('express').Router();

orderController.post('/:id', async (req, res) => {
    let isBackery = false;
    try {
        if (!req.body.quantity || req.body.quantity <= 0) {
            throw new Error('Моля въведете количество по голямо от 0.');
        }
        let order = await getOrderByUser(req.user.email);

        let data = {};
        if (order == null) {

            data = {
                client: req.user.email,
                products: [],
                totalprice: 0,
                orderedBy: req.user._id
            }
            order = await createOrder(data);
        }

        const AllBackeries = await getAllBackery();

        isBackery = checkId(req.params.id, AllBackeries);
        let current;
        let item = {};

        if (isBackery) {
            current = await getBackeryById(req.params.id);

        } else {
            current = await getMaterialById(req.params.id);
        }

        item.name = current.name;
        item.quantity = req.body.quantity;

        order.products.push(item);
        data.products = order.products;
        order.totalPrice += current.price * item.quantity;
        data.totalPrice = order.totalPrice;

        const updated = await updateOrder(order._id, data);

        isBackery ? res.redirect('/catalog/backery') : res.redirect('/catalog/materials');

    } catch (error) {
        isBackery ?
            res.render('backery', { user: req.user, errors: parseError(error) })
            :
            res.render('materials', { user: req.user, errors: parseError(error) });

    }
});

module.exports = orderController;
