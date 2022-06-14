const mongoose = require('mongoose')

const packageSchema = new mongoose.Schema({
    numberofmarla: {
      type: Number,
      required: [true, 'Please enter No of Marla'],
      maxLength: [5, 'Marla cannot exceed 5 characters'],
      default: 0.0
    },
    estimatedsquarefoot: {
        type: Number,
        required: [true, 'Please enter estimated square foot'],
        maxLength: [5, 'square foot  cannot exceed 5 characters'],
        default: 0.0
    },
    cement: {
      type: Number,
      required: [true, 'Please enter cement in kg'],
      maxLength: [5, 'Product name cannot exceed 5 characters'],
      default: 0.0
    },
    sand: {
      type: Number,
      required: [true, 'Please enter  sand in kg'],
      maxLength: [5, 'sand in Kg cannot exceed 5 characters'],
      default: 0.0
  },
  aggregate: {
    type: Number,
    required: [true, 'Please enter  aggregate in kg'],
    maxLength: [5, 'aggregate in Kg cannot exceed 5 characters'],
    default: 0.0
},
steel: {
  type: Number,
  required: [true, 'Please enter  steel in kg'],
  maxLength: [5, 'steel in Kg cannot exceed 5 characters'],
  default: 0.0
},
finishers: {
  type: Number,
  required: [true, 'Please enter  finishers in kg'],
  maxLength: [5, 'finishers in Kg cannot exceed 5 characters'],
  default: 0.0
},
fittings: {
  type: Number,
  required: [true, 'Please enter  fittings in kg'],
  maxLength: [5, 'fittings in Kg cannot exceed 5 characters'],
  default: 0.0
},
totalprice: {
  type: Number,
  required: [true, 'Please enter  total price'],
  maxLength: [5, 'price cannot exceed 5 characters'],
  default: 0.0
},
    ratings: {
      type: Number,
      default: 0
  },
    images: [
        {
            public_id: {
                type: String,
                required: true
            },
            url: {
                type: String,
                required: true
            },
        }
    ],
    numOfReviews: {
        type: Number,
        default: 0
    },
    reviews: [
        {
            user: {
                type: mongoose.Schema.ObjectId,
                ref: 'User',
                required: true
            },
            name: {
                type: String,
                required: true
            },
            rating: {
                type: Number,
                required: true
            },
            comment: {
                type: String,
                required: true
            }
        }
    ],
    user: {
        type: mongoose.Schema.ObjectId,
        ref: 'User',
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Package', packageSchema);

