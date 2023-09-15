const mongoose = require('mongoose');

const restaurantSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  address: 
  {
    type: String,
  },
  img: {
    type: String,
  },
  phoneNumber: {
    type: String,
  },

  menu: [
    {
      _id:{
        type:mongoose.Schema.Types.ObjectId
      },
      itemName: {
        type:String
    },
      description:{
        type:String
      },
      price: {
        type: Number,
      }
    },
  ],
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
});

const Restaurant = mongoose.model('Restaurant', restaurantSchema);

module.exports = Restaurant;
