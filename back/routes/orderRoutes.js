const express = require('express');
const router = express.Router();
const orderController = require('../controllers/orderController'); // Import the order controller

// Create a new order
router.post('/orders', orderController.createOrder);

// Get an order by ID
router.get('/orders/:orderId', orderController.findOrderById);

// Update order information by ID
router.put('/orders/:orderId', orderController.updateOrderById);

// Delete an order by ID
router.delete('/orders/:orderId', orderController.deleteOrderById);

module.exports = router;
