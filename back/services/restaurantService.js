const Restaurant = require('../models/Restaurant'); // Import the Restaurant model

// Create a new restaurant
async function createRestaurant(data) {
  try {
    const newRestaurant = await Restaurant.create(data);
    return newRestaurant;
  } catch (error) {
    throw error;
  }
}

// Find a restaurant by its ID
async function findRestaurantById(restaurantId) {
  try {
    const restaurant = await Restaurant.findById(restaurantId);
    return restaurant;
  } catch (error) {
    throw error;
  }
}

// Update restaurant information by ID
async function updateRestaurantById(restaurantId, newData) {
  try {
    const updatedRestaurant = await Restaurant.findByIdAndUpdate(restaurantId, newData, { new: true });
    return updatedRestaurant;
  } catch (error) {
    throw error;
  }
}

// Delete a restaurant by ID
async function deleteRestaurantById(restaurantId) {
  try {
    await Restaurant.findByIdAndDelete(restaurantId);
  } catch (error) {
    throw error;
  }
}

async function getRestaurantMenuById(restaurantId) {
    try {
      const restaurant = await Restaurant.findById(restaurantId);
      if (!restaurant) {
        throw new Error('Restaurant not found');
      }
  
      return restaurant.menu;
    } catch (error) {
      throw error;
    }
  }

  async function addMenuItemToRestaurant(restaurantId, newItem) {
    try {
      const restaurant = await Restaurant.findById(restaurantId);
      if (!restaurant) {
        throw new Error('Restaurant not found');
      }
  
      // Push the new menu item to the existing menu
      restaurant.menu.push(newItem);
  
      // Save the updated restaurant
      const updatedRestaurant = await restaurant.save();
  
      return updatedRestaurant.menu; // Return the updated menu
    } catch (error) {
      throw error;
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
