const Order = require("../models/Order");

function getAllOrders() {
    return Order.find({});
}

function getOrderByUser(email) {
    return Order.findOne({ email });
}

function createOrder(data) {
    return Order.create(data);
}

function updateOrder(orderId, data) {
    return Order.findByIdAndUpdate(orderId, data);
}

function deleteOrder(orderId) {
    return Order.findByIdAndRemove(orderId);
}

module.exports = {
    getAllOrders,
    getOrderByUser,
    createOrder,
    updateOrder,
    deleteOrder
}