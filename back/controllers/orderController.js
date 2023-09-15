const orderService = require('../services/orderService');

// Create a new order
async function createOrder(req, res) {
  try {
    const newOrder = await orderService.createOrder(req.body);
    res.status(201).json(newOrder);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

// Get an order by ID
async function findOrderById(req, res) {
  const orderId = req.params.orderId;
  try {
    const order = await orderService.findOrderById(orderId);
    if (!order) {
      res.status(404).json({ error: 'Order not found' });
    } else {
      res.status(200).json(order);
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

// Update order information by ID
async function updateOrderById(req, res) {
  const orderId = req.params.orderId;
  const newData = req.body;
  try {
    const updatedOrder = await orderService.updateOrderById(orderId, newData);
    if (!updatedOrder) {
      res.status(404).json({ error: 'Order not found' });
    } else {
      res.status(200).json(updatedOrder);
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

// Delete an order by ID
async function deleteOrderById(req, res) {
  const orderId = req.params.orderId;
  try {
    await orderService.deleteOrderById(orderId);
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

module.exports = {
  createOrder,
  findOrderById,
  updateOrderById,
  deleteOrderById,
};
