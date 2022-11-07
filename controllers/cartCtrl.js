const { getOrderByUser, deleteOrder, updateOrder } = require('../services/orderService');
const { parseError } = require('../util/parser');

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

cartController.post('/order', async (req, res) => {

    let data = {
        name: req.body.name,
        address: req.body.address,
        phone: req.body.phone,
        accepted: true
    }

    const order = await getOrderByUser(req.user.email).lean();
    try {
        if (Object.values(data).some(v => !v)) {

            throw new Error('Моля попълнете всички полета.');
        }
        if (data.phone.length < 10 || data.phone.length > 17) {
            throw new Error('Телефонният номер трябва да е между 10 и 17 символа.')
        }

        await updateOrder(order._id, data);
        res.redirect('/catalog/backery');

    } catch (error) {
        res.render('cart', {
            title: 'Cart Page',
            user: req.user,
            errors: parseError(error),
            order
        });
    }
});

module.exports = cartController;