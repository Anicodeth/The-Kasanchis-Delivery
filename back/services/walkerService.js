const Walker = require('../models/Walker'); // Import the Walker model

// Create a new walker
async function createWalker(data) {
  try {
    const newWalker = await Walker.create(data);
    return newWalker;
  } catch (error) {
    throw error;
  }
}

// Find a walker by their ID
async function findWalkerById(walkerId) {
  try {
    const walker = await Walker.findById(walkerId);
    return walker;
  } catch (error) {
    throw error;
  }
}

// Update walker information by ID
async function updateWalkerById(walkerId, newData) {
  try {
    const updatedWalker = await Walker.findByIdAndUpdate(walkerId, newData, { new: true });
    return updatedWalker;
  } catch (error) {
    throw error;
  }
}

// Delete a walker by ID
async function deleteWalkerById(walkerId) {
  try {
    await Walker.findByIdAndDelete(walkerId);
  } catch (error) {
    throw error;
  }
}

async function findWalkersNearRestaurant(restaurantCoordinates) {
    try {
      const radiusInMeters = 1000000; // Set the radius to 500 meters
  
      // Use the $nearSphere operator to find walkers within the specified radius
      const walkers = await Walker.find({
        location: {
          $nearSphere: {
            $geometry: {
              type: 'Point',
              coordinates: restaurantCoordinates, // Restaurant coordinates
            },
            $maxDistance: radiusInMeters,
          },
        },
      });
  
      return walkers;
    } catch (error) {
      throw error;
    }
  }


 async function getAllWalkers() {
    try {
      const allWalkers = await Walker.find({}); // Use Mongoose or your preferred database library
      return allWalkers;
    } catch (error) {
      throw error;
    }
  }

module.exports = {
  createWalker,
  findWalkerById,
  updateWalkerById,
  deleteWalkerById,
  findWalkersNearRestaurant,
  getAllWalkers
};
