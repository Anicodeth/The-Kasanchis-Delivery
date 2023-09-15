const walkerService = require('../services/walkerService'); // Import the walker service

// Create a new walker
async function createWalker(req, res) {
  try {
    const newWalker = await walkerService.createWalker(req.body);
    res.status(201).json(newWalker);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

// Get a walker by ID
async function findWalkerById(req, res) {
  const walkerId = req.params.walkerId;
  try {
    const walker = await walkerService.findWalkerById(walkerId);
    if (!walker) {
      res.status(404).json({ error: 'Walker not found' });
    } else {
      res.status(200).json(walker);
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

// Update walker information by ID
async function updateWalkerById(req, res) {
  const walkerId = req.params.walkerId;
  const newData = req.body;
  try {
    const updatedWalker = await walkerService.updateWalkerById(walkerId, newData);
    if (!updatedWalker) {
      res.status(404).json({ error: 'Walker not found' });
    } else {
      res.status(200).json(updatedWalker);
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

// Delete a walker by ID
async function deleteWalkerById(req, res) {
  const walkerId = req.params.walkerId;
  try {
    await walkerService.deleteWalkerById(walkerId);
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

// Find walkers near a restaurant by coordinates
async function findWalkersNearRestaurant(req, res) {
  const restaurantCoordinates = req.query.coordinates; // Extract restaurant coordinates from query params
  try {
    // Parse restaurantCoordinates to an array of numbers (e.g., [longitude, latitude])
    const coordinates = restaurantCoordinates.split(',').map(parseFloat);
    const nearbyWalkers = await walkerService.findWalkersNearRestaurant(coordinates);
    res.status(200).json(nearbyWalkers);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

module.exports = {
  createWalker,
  findWalkerById,
  updateWalkerById,
  deleteWalkerById,
  findWalkersNearRestaurant,
};
