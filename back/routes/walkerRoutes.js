const express = require('express');
const router = express.Router();
const walkerController = require('../controllers/walkerController'); // Import the walker controller

// Create a new walker
router.post('/walkers', walkerController.createWalker);

// Get a walker by ID
router.get('/walkers/:walkerId', walkerController.findWalkerById);

// Update walker information by ID
router.put('/walkers/:walkerId', walkerController.updateWalkerById);

// Delete a walker by ID
router.delete('/walkers/:walkerId', walkerController.deleteWalkerById);

// Find walkers near a restaurant by coordinates
router.get('/walkers/near-restaurant', walkerController.findWalkersNearRestaurant);


router.get('/allwalkers', walkerController.getAllWalkers);

module.exports = router;
