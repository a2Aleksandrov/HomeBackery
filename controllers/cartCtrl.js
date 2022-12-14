const { getOrderByUser, deleteOrder, updateOrder } = require('../services/orderService');
const { parseError } = require('../util/parser');

const cartController = require('express').Router();

cartController.get('/order', async (req, res) => {
    try {
        const order = await getOrderByUser(req.user.email).lean();

        res.render('cart', {
            title: 'Cart Page',
            user: req.user,
            order
        });
    } catch (error) {
        res.render('error');
    }
});

cartController.get('/order/delete', async (req, res) => {
    try {
        const order = await getOrderByUser(req.user.email);
        await deleteOrder(order._id);
        res.redirect('/catalog/cakes');
    } catch (error) {
        res.render('error');
    }
});

cartController.post('/order', async (req, res) => {

    let data = {
        name: req.body.name,
        address: req.body.address,
        phone: req.body.phone,
        info: req.body.info,
        accepted: true
    }

    const order = await getOrderByUser(req.user.email).lean();
    try {
        if (data.name == '' || data.address == '' || data.phone == '') {

            throw new Error('Име, адрес и телефон са задължителни полета.');
        }
        if (data.phone.length < 10 || data.phone.length > 17) {
            throw new Error('Моля въведете валиден телефонен номер.');
        }

        await updateOrder(order._id, data);
        res.redirect('/send');

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