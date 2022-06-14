const Vehicle = require("../models/vehicle");

const ErrorHandler = require("../utils/errorHandler");
const catchAsyncErrors = require("../middlewares/catchAsyncErrors");
const APIFeatures = require("../utils/apiFeatures");
const cloudinary = require("cloudinary");

// Create new vehicle   =>   /api/v1/admin/vehicle/new
exports.newVehicle = catchAsyncErrors(async (req, res, next) => {
  let images = req.body.file;
  let imagesLinks = [];

  const result = await cloudinary.v2.uploader.upload(images, {
    folder: "Vehicle",
    public_id: new Date().toISOString() + req.body.name,
  });

  imagesLinks.push({
    public_id: result.public_id,
    url: result.secure_url,
  });

  req.body.images = imagesLinks;

  const vehicle = await Vehicle.create(req.body);

  res.status(201).json({
    success: true,
    vehicle,
  });
});

//Get all vehicles => /api/v1/vehicles
exports.getVehicles = catchAsyncErrors(async (req, res, next) => {
  const vehiles = await Vehicle.find({ isApproved: true });

  res.status(200).json({
    success: true,
    vehiles,
  });
});

// Get all vehicles (Admin)  =>   /api/v1/admin/vehicles
exports.getAdminVehicles = catchAsyncErrors(async (req, res, next) => {
  const vehicles = await Vehicle.find();

  res.status(200).json({
    success: true,
    vehicles,
  });
});

// Get single vehicle details   =>   /api/v1/vehicle/:id
exports.getSingleVehicle = catchAsyncErrors(async (req, res, next) => {
  const vehicle = await Vehicle.findById(req.params.id);

  if (!vehicle) {
    return next(new ErrorHandler("Vehicle not found", 404));
  }

  res.status(200).json({
    success: true,
    vehicle,
  });
});

// Update Vehicle   =>   /api/v1/admin/vehicle/:id
exports.updateVehicle = catchAsyncErrors(async (req, res, next) => {
  let vehicle = await Vehicle.findById(req.params.id);

  if (!vehicle) {
    return next(new ErrorHandler("Vehicle not found", 404));
  }

  // let images = []
  // if (typeof req.body.images === 'string') {
  //     images.push(req.body.images)
  // } else {
  //     images = req.body.images
  // }

  // if (images !== undefined) {

  //     // Deleting images associated with the vehicle
  //     for (let i = 0; i < vehicle.images.length; i++) {
  //         const result = await cloudinary.v2.uploader.destroy(vehicle.images[i].public_id)
  //     }

  //     let imagesLinks = [];

  //     for (let i = 0; i < images.length; i++) {
  //         const result = await cloudinary.v2.uploader.upload(images[i], {
  //             folder: 'vehicles'
  //         });

  //         imagesLinks.push({
  //             public_id: result.public_id,
  //             url: result.secure_url
  //         })
  //     }

  //     req.body.images = imagesLinks

  // }

  vehicle = await Vehicle.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });

  res.status(200).json({
    success: true,
    vehicle,
  });
});

// Delete Vehicle   =>   /api/v1/admin/vehicle/:id
exports.deleteVehicle = catchAsyncErrors(async (req, res, next) => {
  const vehicle = await Vehicle.findById(req.params.id);

  if (!vehicle) {
    return next(new ErrorHandler("Vehicle not found", 404));
  }

  // Deleting images associated with the vehicle
  for (let i = 0; i < vehicle.images.length; i++) {
    const result = await cloudinary.v2.uploader.destroy(
      vehicle.images[i].public_id
    );
  }

  await vehicle.remove();

  res.status(200).json({
    success: true,
    message: "Vehicle is deleted.",
  });
});

// Create new review   =>   /api/v1/review
exports.createVehicleReview = catchAsyncErrors(async (req, res, next) => {
  const { rating, comment, vehicleId } = req.body;

  const review = {
    user: req.user._id,
    name: req.user.name,
    rating: Number(rating),
    comment,
  };

  const vehicle = await Vehicle.findById(vehicleId);

  const isReviewed = vehicle.reviews.find(
    (r) => r.user.toString() === req.user._id.toString()
  );

  if (isReviewed) {
    vehicle.reviews.forEach((review) => {
      if (review.user.toString() === req.user._id.toString()) {
        review.comment = comment;
        review.rating = rating;
      }
    });
  } else {
    vehicle.reviews.push(review);
    vehicle.numOfReviews = vehicle.reviews.length;
  }

  vehicle.ratings =
    vehicle.reviews.reduce((acc, item) => item.rating + acc, 0) /
    vehicle.reviews.length;

  await vehicle.save({ validateBeforeSave: false });

  res.status(200).json({
    success: true,
  });
});

// Get vehicle Reviews   =>   /api/v1/reviews
exports.getVehicleReviews = catchAsyncErrors(async (req, res, next) => {
  const vehicle = await Vehicle.findById(req.query.id);

  res.status(200).json({
    success: true,
    reviews: vehicle.reviews,
  });
});

// Delete vehicle Review   =>   /api/v1/reviews
exports.deleteReview = catchAsyncErrors(async (req, res, next) => {
  const vehicle = await Vehicle.findById(req.query.vehicleId);

  console.log(vehicle);

  const reviews = vehicle.reviews.filter(
    (review) => review._id.toString() !== req.query.id.toString()
  );

  const numOfReviews = reviews.length;

  const ratings =
    vehicle.reviews.reduce((acc, item) => item.rating + acc, 0) /
    reviews.length;

  await Vehicle.findByIdAndUpdate(
    req.query.vehicleId,
    {
      reviews,
      ratings,
      numOfReviews,
    },
    {
      new: true,
      runValidators: true,
      useFindAndModify: false,
    }
  );

  res.status(200).json({
    success: true,
  });
});
