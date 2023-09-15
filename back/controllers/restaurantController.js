const express = require('express');
const router = express.Router();
const restaurantService = require('../services/restaurantService'); // Import the restaurant service

// Create a new restaurant
async function createRestaurant(req, res) {
  try {
    const newRestaurant = await restaurantService.createRestaurant(req.body);
    res.status(201).json(newRestaurant);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

// Get a restaurant by ID
async function findRestaurantById(req, res) {
  const restaurantId = req.params.restaurantId;
  try {
    const restaurant = await restaurantService.findRestaurantById(restaurantId);
    if (!restaurant) {
      res.status(404).json({ error: 'Restaurant not found' });
    } else {
      res.status(200).json(restaurant);
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

// Update restaurant information by ID
async function updateRestaurantById(req, res) {
  const restaurantId = req.params.restaurantId;
  const newData = req.body;
  try {
    const updatedRestaurant = await restaurantService.updateRestaurantById(restaurantId, newData);
    if (!updatedRestaurant) {
      res.status(404).json({ error: 'Restaurant not found' });
    } else {
      res.status(200).json(updatedRestaurant);
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

// Delete a restaurant by ID
async function deleteRestaurantById(req, res) {
  const restaurantId = req.params.restaurantId;
  try {
    await restaurantService.deleteRestaurantById(restaurantId);
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

// Get a restaurant's menu by ID
async function getRestaurantMenuById(req, res) {
  const restaurantId = req.params.restaurantId;
  try {
    const menu = await restaurantService.getRestaurantMenuById(restaurantId);
    if (!menu) {
      res.status(404).json({ error: 'Menu not found' });
    } else {
      res.status(200).json(menu);
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

// Add a new menu item to a restaurant by ID
async function addMenuItemToRestaurant(req, res) {
  const restaurantId = req.params.restaurantId;
  const newItem = req.body;
  try {
    const updatedMenu = await restaurantService.addMenuItemToRestaurant(restaurantId, newItem);
    res.status(200).json(updatedMenu);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

module.exports = {
  createRestaurant,
  findRestaurantById,
  updateRestaurantById,
  deleteRestaurantById,
  getRestaurantMenuById,
  addMenuItemToRestaurant,
};
