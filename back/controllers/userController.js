const express = require('express');
const router = express.Router();
const userService = require('../services/userService'); // Import the user service

// Create a new user
router.post('/users', async (req, res) => {
  try {
    const newUser = await userService.createUser(req.body);
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get a user by ID
router.get('/users/:userId', async (req, res) => {
  const userId = req.params.userId;
  try {
    const user = await userService.findUserById(userId);
    if (!user) {
      res.status(404).json({ error: 'User not found' });
    } else {
      res.status(200).json(user);
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Update user information by ID
router.put('/users/:userId', async (req, res) => {
  const userId = req.params.userId;
  const newData = req.body;
  try {
    const updatedUser = await userService.updateUserById(userId, newData);
    if (!updatedUser) {
      res.status(404).json({ error: 'User not found' });
    } else {
      res.status(200).json(updatedUser);
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Delete a user by ID
router.delete('/users/:userId', async (req, res) => {
  const userId = req.params.userId;
  try {
    await userService.deleteUserById(userId);
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
