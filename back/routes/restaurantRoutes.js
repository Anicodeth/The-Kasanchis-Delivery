const express = require('express');
const router = express.Router();
const restaurantController = require('../controllers/restaurantController'); // Import the restaurant controller

// Create a new restaurant
router.post('/restaurants', restaurantController.createRestaurant);

// Get a restaurant by ID
router.get('/restaurants/:restaurantId', restaurantController.findRestaurantById);

// Update restaurant information by ID
router.put('/restaurants/:restaurantId', restaurantController.updateRestaurantById);

// Delete a restaurant by ID
router.delete('/restaurants/:restaurantId', restaurantController.deleteRestaurantById);

// Get a restaurant's menu by ID
router.get('/restaurants/:restaurantId/menu', restaurantController.getRestaurantMenuById);

// Add a new menu item to a restaurant by ID
router.post('/restaurants/:restaurantId/menu', restaurantController.addMenuItemToRestaurant);

module.exports = router;

