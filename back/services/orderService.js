const Order = require('../models/Order');

// Create a new order
async function createOrder(data) {
  try {
    const newOrder = await Order.create(data);
    return newOrder;
  } catch (error) {
    throw error;
  }
}

// Find an order by its ID
async function findOrderById(orderId) {
  try {
    const order = await Order.findById(orderId);
    return order;
  } catch (error) {
    throw error;
  }
}

// Update order information by ID
async function updateOrderById(orderId, newData) {
  try {
    const updatedOrder = await Order.findByIdAndUpdate(orderId, newData, { new: true });
    return updatedOrder;
  } catch (error) {
    throw error;
  }
}

// Delete an order by ID
async function deleteOrderById(orderId) {
  try {
    await Order.findByIdAndDelete(orderId);
  } catch (error) {
    throw error;
  }
}

module.exports = {
  createOrder,
  findOrderById,
  updateOrderById,
  deleteOrderById,
};
