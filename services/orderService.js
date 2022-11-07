const Order = require("../models/Order");

function getAllOrders() {
    return Order.find({});
}

function getOrderByUser(email) {
    return Order.findOne({ client: email });
}

function getOrderById(id) {
    return Order.findById(id);
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
    getOrderById,
    createOrder,
    updateOrder,
    deleteOrder
}