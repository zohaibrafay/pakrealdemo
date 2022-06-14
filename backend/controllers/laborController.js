const Labor = require("../models/labor");
const ErrorHandler = require("../utils/errorHandler");
const catchAsyncErrors = require("../middlewares/catchAsyncErrors");
const APIFeatures = require("../utils/apiFeatures");
const cloudinary = require("cloudinary");


// Create new labor   =>   /api/v1/labor/new
exports.newLabor = catchAsyncErrors(async (req, res, next) => {
  let images = req.body.file;
  let imagesLinks = [];

      const result = await cloudinary.v2.uploader.upload(images, 
      { folder: "Labors", 
        public_id: new Date().toISOString() + req.body.name });

        imagesLinks.push({
          public_id: result.public_id,
          url: result.secure_url
      })
  

  req.body.images = imagesLinks
  

  // const labor = await Labor.create(req.body);

  // res.status(201).json({
  //     success: true,
  //     labor
  // })
  //   let images = [];
  //   if (typeof req.body.images === "string") {
  //     images.push(req.body.images);
  //   } else {
  //     images = req.body.images;
  //   }

  //   let imagesLinks = [];

  //   for (let i = 0; i < images.length; i++) {
  //     const result = await cloudinary.v2.uploader.upload(images[i], {
  //       folder: "labors",
  //     });

  //     imagesLinks.push({
  //       public_id: result.public_id,
  //       url: result.secure_url,
  //     });
  //   }

  //   req.body.images = imagesLinks;
  //   req.body.user = req.user.id;

  const labor = await Labor.create(req.body);
  res.status(201).json({
    success: true,
    labor,
  });
});

//Get all labors => /api/v1/labors
exports.getLabors = catchAsyncErrors(async (req, res, next) => {
  const labors = await Labor.find({isApproved: true});

  res.status(200).json({
    success: true,
    labors,
  });
});

// Get all labors (Admin)  =>   /api/v1/admin/labors
exports.getAdminLabors = catchAsyncErrors(async (req, res, next) => {
  const labors = await Labor.find();

  res.status(200).json({
    success: true,
    labors,
  });
});

exports.getApprovedLabors = catchAsyncErrors(async (req, res, next) => {
  const labors = await Labor.find({isApproved: true});

  res.status(200).json({
    success: true,
    labors,
  });
});

// Get single labor details   =>   /api/v1/labor/:id
exports.getSingleLabor = catchAsyncErrors(async (req, res, next) => {
  const labor = await Labor.findById(req.params.id);

  if (!labor) {
    return next(new ErrorHandler("Labor not found", 404));
  }

  res.status(200).json({
    success: true,
    labor,
  });
});

// Update labor   =>   /api/v1/admin/labor/:id
exports.updateLabor = catchAsyncErrors(async (req, res, next) => {
  let labor = await Labor.findById(req.params.id);

  if (!labor) {
    return next(new ErrorHandler("labor not found", 404));
  }

  // let images = [];
  // if (typeof req.body.images === "string") {
  //   images.push(req.body.images);
  // } else {
  //   images = req.body.images;
  // }

  // if (images !== undefined) {
  //   // Deleting images associated with the labor
  //   for (let i = 0; i < labor.images.length; i++) {
  //     const result = await cloudinary.v2.uploader.destroy(
  //       labor.images[i].public_id
  //     );
  //   }

  //   let imagesLinks = [];

  //   for (let i = 0; i < images.length; i++) {
  //     const result = await cloudinary.v2.uploader.upload(images[i], {
  //       folder: "labors",
  //     });

  //     imagesLinks.push({
  //       public_id: result.public_id,
  //       url: result.secure_url,
  //     });
  //   }

  //   req.body.images = imagesLinks;
  // }

  labor = await Labor.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });

  res.status(200).json({
    success: true,
    labor,
  });
});

// Delete labor   =>   /api/v1/admin/labor/:id
exports.deleteLabor = catchAsyncErrors(async (req, res, next) => {
  const labor = await Labor.findById(req.params.id);

  if (!labor) {
    return next(new ErrorHandler("labor not found", 404));
  }

  // Deleting images associated with the labor
  for (let i = 0; i < labor.images.length; i++) {
    const result = await cloudinary.v2.uploader.destroy(
      labor.images[i].public_id
    );
  }

  await labor.remove();

  res.status(200).json({
    success: true,
    message: "Labor is deleted.",
  });
});

// Create new review   =>   /api/v1/review
exports.createLaborReview = catchAsyncErrors(async (req, res, next) => {
  const { rating, comment, laborId } = req.body;

  const review = {
    user: req.user._id,
    name: req.user.name,
    rating: Number(rating),
    comment,
  };

  const labor = await Labor.findById(laborId);

  const isReviewed = labor.reviews.find(
    (r) => r.user.toString() === req.user._id.toString()
  );

  if (isReviewed) {
    labor.reviews.forEach((review) => {
      if (review.user.toString() === req.user._id.toString()) {
        review.comment = comment;
        review.rating = rating;
      }
    });
  } else {
    labor.reviews.push(review);
    labor.numOfReviews = labor.reviews.length;
  }

  labor.ratings =
    labor.reviews.reduce((acc, item) => item.rating + acc, 0) /
    labor.reviews.length;

  await labor.save({ validateBeforeSave: false });

  res.status(200).json({
    success: true,
  });
});

// Get labor Reviews   =>   /api/v1/reviews
exports.getLaborReviews = catchAsyncErrors(async (req, res, next) => {
  const labor = await Labor.findById(req.query.id);

  res.status(200).json({
    success: true,
    reviews: labor.reviews,
  });
});

// Delete labor Review   =>   /api/v1/reviews
exports.deleteReview = catchAsyncErrors(async (req, res, next) => {
  const labor = await Labor.findById(req.query.laborId);

  console.log(labor);

  const reviews = labor.reviews.filter(
    (review) => review._id.toString() !== req.query.id.toString()
  );

  const numOfReviews = reviews.length;

  const ratings =
    labor.reviews.reduce((acc, item) => item.rating + acc, 0) / reviews.length;

  await Labor.findByIdAndUpdate(
    req.query.laborId,
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
