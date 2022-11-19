const { createOrder, updateOrder, getOrderByUser } = require('../services/orderService');
const { getAllBackery, checkId, getBackeryById, getMaterialById, getAllMaterials } = require('../services/productsService');
const { parseError } = require('../util/parser');

const orderController = require('express').Router();

orderController.post('/:id', async (req, res) => {
    let isBackery = false;
    try {
        const AllBackeries = await getAllBackery();

        isBackery = checkId(req.params.id, AllBackeries);

        let current;
        let item = {};
        let data = {};

        if (isBackery) {
            current = await getBackeryById(req.params.id);

        } else {
            current = await getMaterialById(req.params.id);
        }

        if (!req.body.quantity || req.body.quantity <= 0) {
            throw new Error('Моля въведете количество по голямо от 0.');
        }

        let order = await getOrderByUser(req.user.email);
        if (order == null) {

            data = {
                client: req.user.email,
                products: [],
                totalprice: 0,
                orderedBy: req.user._id
            }
            order = await createOrder(data);
        }

        item.name = current.name;
        item.quantity = req.body.quantity;

        order.products.push(item);
        data.products = order.products;
        order.totalPrice += current.price * item.quantity;
        data.totalPrice = order.totalPrice;

        const updated = await updateOrder(order._id, data);
        const kind = req.headers.referer.slice(30);

        res.redirect('/catalog/' + kind);

    } catch (error) {
        if (isBackery) {
            let backery = await getAllBackery().lean();
            res.render('backery', {
                title: 'Backery Page',
                user: req.user,
                errors: parseError(error),
                backery
            });
        } else {
            let materials = await getAllMaterials().lean();
            res.render('materials', {
                title: 'Materials Page',
                user: req.user,
                errors: parseError(error),
                materials
            });
        }
    }
});

module.exports = orderController;