const mongoose = require("mongoose");

const labourSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please enter labours name"],
    trim: true,
    maxLength: [100, "Product name cannot exceed 100 characters"],
  },
  dob: {
    type: String,
    required: [true, "Please enter Date of Birth price"],
  },
  cnic: {
    type: Number,
    required: [true, "Please enter CNIC price"],
  },
  description: {
    type: String,
    required: [true, "Please enter work description"],
  },
  type: {
    type: String,
    required: [true, "Please select specified labour type."],
    enum: {
      values: ["Plumber", "Electration", "Civil Engineer"],
      message: "Please select correct category for Labour Type",
    },
  },
  contactNumber: {
    type: Number,
    maxLength: [25, "Product name cannot exceed 5 characters"],
    default: 0,
  },
  labourArea: {
    type: String,
    maxlength: [255, "Labour Area Length should not exceed 255 characters"],
  },
  images: [
    {
      public_id: {
        type: String,
      },
      url: {
        type: String,
      },
    },
  ],
  isApproved: {
    type: Boolean,
    default: false
  }
});

module.exports = mongoose.model("Labour", labourSchema);
