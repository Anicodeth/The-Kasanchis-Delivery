const User = require('../models/User'); // Import the User model

// Create a new user
async function createUser(data) {
  try {
    const newUser = await User.create(data);
    return newUser;
  } catch (error) {
    throw error;
  }
}

// Find a user by their ID
async function findUserById(userId) {
  try {
    const user = await User.findById(userId);
    return user;
  } catch (error) {
    throw error;
  }
}

// Update user information by ID
async function updateUserById(userId, newData) {
  try {
    const updatedUser = await User.findByIdAndUpdate(userId, newData, { new: true });
    return updatedUser;
  } catch (error) {
    throw error;
  }
}

// Delete a user by ID
async function deleteUserById(userId) {
  try {
    await User.findByIdAndDelete(userId);
  } catch (error) {
    throw error;
  }
}

module.exports = {
  createUser,
  findUserById,
  updateUserById,
  deleteUserById,
};
