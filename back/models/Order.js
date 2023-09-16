const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  user: {
    type: String,
  },
  restaurant: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Restaurant', // Reference to the Restaurant model
  },
  items: [
    {
      name: String,
      restaurantName: String,
      price: Number,
      quantity: Number,
    },
  ],
  totalAmount: {
    type: Number,
  },
  status: {
    type: String,
    enum: ['Pending', 'Processing', 'Completed', 'Cancelled'],
    default: 'Pending',
  },
  deliveryAddress: {
    type: String,
  },
  deliveryWalker: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Walker', // Reference to the Walker model
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
