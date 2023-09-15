const mongoose = require('mongoose');

const walkerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    },
  location: {
    type: {
      type: String,
      enum: ['Point'],
      required: true,
    },
    coordinates: {
      type: [Number],
      required: true,
    },
  },
  availabilityStatus: {
    type: String,
    enum: ['available', 'unavailable'],
    default: 'available',
  },

});

walkerSchema.index({ location: '2dsphere' });
const Walker = mongoose.model('Walker', walkerSchema);

module.exports = Walker;
