const Pack = require('../models/package')

const ErrorHandler = require('../utils/errorHandler');
const catchAsyncErrors = require('../middlewares/catchAsyncErrors');
const APIFeatures = require('../utils/apiFeatures')
const cloudinary = require('cloudinary')

// Create new pack   =>   /api/v1/admin/pack/new
exports.newPack = catchAsyncErrors(async (req, res, next) => {

    let images = []
    if (typeof req.body.images === 'string') {
        images.push(req.body.images)
    } else {
        images = req.body.images
    }

    let imagesLinks = [];

    for (let i = 0; i < images.length; i++) {
        const result = await cloudinary.v2.uploader.upload(images[i], {
            folder: 'packs'
        });

        imagesLinks.push({
            public_id: result.public_id,
            url: result.secure_url
        })
    }

    req.body.images = imagesLinks
    req.body.user = req.user.id;

    const pack = await Pack.create(req.body);

    res.status(201).json({
        success: true,
        pack
    })
})


//Get all packs => /api/v1/packs
exports.getPack = catchAsyncErrors (async (req,res, next) =>{
    const resPerPage=4;
    const packsCount = await Pack.countDocuments();
  
    const apiFeatures = new APIFeatures(Pack.find(), req.query)
    .search()
    .filter()
    let packs = await apiFeatures.query;
    let filteredPacksCount = packs.length;
  
      apiFeatures.pagination(resPerPage)
      packs = await apiFeatures.query.clone();
     
      res.status(200).json({
        success: true,
        packsCount,
        resPerPage,
        filteredPacksCount,
        packs
      })
    
  })
  
// Get all packs (Admin)  =>   /api/v1/admin/packs
exports.getAdminPacks = catchAsyncErrors(async (req, res, next) => {

    const packs = await Pack.find();

    res.status(200).json({
        success: true,
        packs
    })

})

// Get single pack details   =>   /api/v1/pack/:id
exports.getSinglePack = catchAsyncErrors(async (req, res, next) => {

    const pack = await Pack.findById(req.params.id);

    if (!pack) {
        return next(new ErrorHandler('Pack not found', 404));
    }


    res.status(200).json({
        success: true,
        pack
    })

})

// Update Pack   =>   /api/v1/admin/pack/:id
exports.updatePack = catchAsyncErrors(async (req, res, next) => {

    let pack = await Pack.findById(req.params.id);

    if (!pack) {
        return next(new ErrorHandler('Pack not found', 404));
    }

    let images = []
    if (typeof req.body.images === 'string') {
        images.push(req.body.images)
    } else {
        images = req.body.images
    }

    if (images !== undefined) {

        // Deleting images associated with the pack
        for (let i = 0; i < pack.images.length; i++) {
            const result = await cloudinary.v2.uploader.destroy(pack.images[i].public_id)
        }

        let imagesLinks = [];

        for (let i = 0; i < images.length; i++) {
            const result = await cloudinary.v2.uploader.upload(images[i], {
                folder: 'packs'
            });

            imagesLinks.push({
                public_id: result.public_id,
                url: result.secure_url
            })
        }

        req.body.images = imagesLinks

    }



    pack = await Pack.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
        useFindAndModify: false
    });

    res.status(200).json({
        success: true,
        pack
    })

})

// Delete Pack   =>   /api/v1/admin/pack/:id
exports.deletePack = catchAsyncErrors(async (req, res, next) => {

    const pack = await Pack.findById(req.params.id);

    if (!pack) {
        return next(new ErrorHandler('Pack not found', 404));
    }

    // Deleting images associated with the pack
    for (let i = 0; i < pack.images.length; i++) {
        const result = await cloudinary.v2.uploader.destroy(pack.images[i].public_id)
    }

    await pack.remove();

    res.status(200).json({
        success: true,
        message: 'Pack is deleted.'
    })

})


// Create new review   =>   /api/v1/review
exports.createPackReview = catchAsyncErrors(async (req, res, next) => {

    const { rating, comment, packId } = req.body;

    const review = {
        user: req.user._id,
        name: req.user.name,
        rating: Number(rating),
        comment
    }

    const pack = await Pack.findById(packId);

    const isReviewed = pack.reviews.find(
        r => r.user.toString() === req.user._id.toString()
    )

    if (isReviewed) {
        pack.reviews.forEach(review => {
            if (review.user.toString() === req.user._id.toString()) {
                review.comment = comment;
                review.rating = rating;
            }
        })

    } else {
        pack.reviews.push(review);
        pack.numOfReviews = pack.reviews.length
    }

    pack.ratings = pack.reviews.reduce((acc, item) => item.rating + acc, 0) / pack.reviews.length

    await pack.save({ validateBeforeSave: false });

    res.status(200).json({
        success: true
    })

})


// Get Pack Reviews   =>   /api/v1/reviews
exports.getPackReviews = catchAsyncErrors(async (req, res, next) => {
    const pack = await Pack.findById(req.query.id);

    res.status(200).json({
        success: true,
        reviews: pack.reviews
    })
})

// Delete Pack Review   =>   /api/v1/reviews
exports.deleteReview = catchAsyncErrors(async (req, res, next) => {

    const pack = await Pack.findById(req.query.packId);

    console.log(pack);

    const reviews = pack.reviews.filter(review => review._id.toString() !== req.query.id.toString());

    const numOfReviews = reviews.length;

    const ratings = pack.reviews.reduce((acc, item) => item.rating + acc, 0) / reviews.length

    await Pack.findByIdAndUpdate(req.query.packId, {
        reviews,
        ratings,
        numOfReviews
    }, {
        new: true,
        runValidators: true,
        useFindAndModify: false
    })

    res.status(200).json({
        success: true
    })
})
    





// Get all packs   =>   /api/v1/packs?keyword=apple
exports.getPacks = (req, res, next) => {


  res.status(200).json({
      success: true,
      message: 'This route show all pack in databse'
      
  })

}
