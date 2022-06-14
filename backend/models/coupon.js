const mongoose = require("mongoose");

const CouponSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please enter coupon name"],
    trim: true,
    maxLength: [100, "coupon name cannot exceed 100 characters"],
  },
  expiry: {
    type: String,
    required: [true, "Please enter Expiry Date for Coupon"],
  },
  discount: {
    type: Number,
    required: [true, "Please enter discount"],
  },
});

module.exports = mongoose.model("Coupon", CouponSchema);
