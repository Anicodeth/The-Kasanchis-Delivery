const express = require('express');
const router = express.Router();
const userController = require('./userController'); // Import the user controller

// Create a new user
router.post('/users', userController.createUser);

// Get a user by ID
router.get('/users/:userId', userController.findUserById);

// Update user information by ID
router.put('/users/:userId', userController.updateUserById);

// Delete a user by ID
router.delete('/users/:userId', userController.deleteUserById);

module.exports = router;
