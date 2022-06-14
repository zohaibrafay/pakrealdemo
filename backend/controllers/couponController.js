const Coupon = require("../models/coupon");

const ErrorHandler = require("../utils/errorHandler");
const catchAsyncErrors = require("../middlewares/catchAsyncErrors");
const APIFeatures = require("../utils/apiFeatures");
const cloudinary = require("cloudinary");

// Create new Coupon   =>   /api/v1/admin/coupon/new
exports.newCoupon = catchAsyncErrors(async (req, res, next) => {
  const coupon = await Coupon.create(req.body);

  res.status(201).json({
    success: true,
    couponsList: coupon,
  });
});

//Get all Coupon => /api/v1/coupons
exports.getCoupons = catchAsyncErrors(async (req, res, next) => {
  const coupon = await Coupon.find({});

  res.status(200).json({
    success: true,
    coupons: coupon,
  });
});

// Get single Coupon details   =>   /api/v1/Coupon/:id
exports.getSingleCoupon = catchAsyncErrors(async (req, res, next) => {
  const coupon = await Coupon.findById(req.params.id);

  if (!coupon) {
    return next(new ErrorHandler("Coupon not found", 404));
  }

  res.status(200).json({
    success: true,
    coupon,
  });
});

// Get verify coupon details   =>   /api/v1//verifyCoupon
exports.verifyCoupon = catchAsyncErrors(async (req, res, next) => {

  const coupon = await Coupon.find({name: req.body.name});
  if (coupon.length === 0) {
    return next(new ErrorHandler("Coupon not found", 203));
  }
  const todaysDate = new Date();
  const expiryDate = new Date(coupon[0].expiry);
  let isValid = expiryDate>= todaysDate;
  if(isValid)
  {
    res.status(200).json({
      success: true,
      discount: coupon[0].discount,
    });
  }
  else
  {
    res.status(203).json({
      success: false,
      errMessage: "Regretably, The coupon has expired !",
    });
  }
});



// Update Coupon   =>   /api/v1/admin/coupon/:id
exports.updateCoupon = catchAsyncErrors(async (req, res, next) => {
  let coupon = await Coupon.findById(req.params.id);

  if (!coupon) {
    return next(new ErrorHandler("Coupon not found", 404));
  }

  coupon = await Coupon.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });

  res.status(200).json({
    success: true,
    coupon,
  });
});

// Delete Coupon   =>   /api/v1/admin/coupon/:id
exports.deleteCoupon = catchAsyncErrors(async (req, res, next) => {
  const coupon = await Coupon.findById(req.params.id);

  if (!coupon) {
    return next(new ErrorHandler("Coupon not found", 404));
  }

  await coupon.remove();

  res.status(200).json({
    success: true,
    message: `Coupon with id: ${req.params.id} has been deleted successfully`,
  });
});
