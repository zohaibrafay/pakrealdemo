
const Video = require('../models/video')

const ErrorHandler = require('../utils/errorHandler');
const catchAsyncErrors = require('../middlewares/catchAsyncErrors');
const APIFeatures = require('../utils/apiFeatures')
const cloudinary = require('cloudinary')

// Create new product   =>   /api/v1/admin/product/new
// exports.newVideo = catchAsyncErrors(async (req, res, next) => {

//     let videos = []
//     if (typeof req.body.videos === 'string') {
//         videos.push(req.body.videos)
//     } else {
//         videos = req.body.videos
//     }

//     let videosLinks = [];

//     for (let i = 0; i < videos.length; i++) {
//         const result = await cloudinary.v2.uploader.upload(videos[i], {
//             folder: 'videos'
//         });

//         videosLinks.push({
//             public_id: result.public_id,
//             url: result.secure_url
//         })
//     }

//     req.body.videos = videosLinks
//     req.body.user = req.user.id;

//     const projectVideo = await Video.create(req.body);

//     res.status(201).json({
//         success: true,
//         projectVideo
//     })
// })
exports.newVideo = catchAsyncErrors(async (req, res, next) => {

    let clips = req.body.clip;
    let clipsLinks = [];
  
        const result = await cloudinary.v2.uploader.upload(clips, { resource_type: "video", 
      public_id: new Date().toISOString(),
      folder : "videos",
      chunk_size: 6000000,
      eager: [
        { width: 300, height: 300, crop: "pad", audio_codec: "none" }, 
        { width: 160, height: 100, crop: "crop", gravity: "south", audio_codec: "none" } ],                                   
      eager_async: true,
      eager_notification_url: "" },);
  
        clipsLinks.push({
            public_id: result.public_id,
            url: result.secure_url
        })
    
  
    req.body.clips = clipsLinks
    req.body.user = req.user.id;
  
    const video = await Video.create(req.body);
  
    res.status(201).json({
        success: true,
        video
    })
  })




// exports.newVideo=catchAsyncErrors (async (req,res,next)=>
// {

// req.body.user=req.user.id;


//     const video=await Video.create(req.body);
//     res.status(201).json({
// success:true,
// video

//     })
// })

// Get all products => /api/v1/products
exports.getVideos = catchAsyncErrors (async (req,res, next) =>{
    const resPerPage=4;
    const videosCount = await Video.countDocuments();
  
    const apiFeatures = new APIFeatures(Video.find(), req.query)
    .search()
    .filter()
    let videos = await apiFeatures.query;
    let filteredVideosCount = videos.length;
  
      apiFeatures.pagination(resPerPage)
      videos = await apiFeatures.query.clone();
     
      res.status(200).json({
        success: true,
        videosCount,
        resPerPage,
        filteredVideosCount,
        videos
      })
    
  })
  
// Get all products (Admin)  =>   /api/v1/admin/products
exports.getAdminVideos = catchAsyncErrors(async (req, res, next) => {

    const videos = await Video.find();
    res.status(200).json({
        success: true,
        videos
    })
})

// Get single product details   =>   /api/v1/product/:id
exports.getSingleVideo = catchAsyncErrors(async (req, res, next) => {

    const video = await Video.findById(req.params.id);

    if (!video) {
        return next(new ErrorHandler('Video not found', 404));
    }


    res.status(200).json({
        success: true,
        video
    })

})

// Update Product   =>   /api/v1/admin/product/:id
exports.updateVideo = catchAsyncErrors(async (req, res, next) => {

    let video = await Video.findById(req.params.id);

    if (!video) {
        return next(new ErrorHandler('Video not found', 404));
    }

    let clips = []
    if (typeof req.body.clips === 'string') {
        clips.push(req.body.clips)
    } else {
        clips = req.body.clips
    }

    if (clips !== undefined) {

        // Deleting images associated with the product
        for (let i = 0; i < video.clips.length; i++) {
            const result = await cloudinary.v2.uploader.destroy(video.clips[i].public_id)
        }

        let clipsLinks = [];

        for (let i = 0; i < clips.length; i++) {
            const result = await cloudinary.v2.uploader.upload(clips[i], {
                folder: 'videos'
            });

            clipsLinks.push({
                public_id: result.public_id,
                url: result.secure_url
            })
        }

        req.body.clips = clipsLinks

    }



    video = await Video.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
        useFindAndModify: false
    });

    res.status(200).json({
        success: true,
        video
    })

})

// Delete Product   =>   /api/v1/admin/product/:id
exports.deleteVideo = catchAsyncErrors(async (req, res, next) => {

    const video = await Video.findById(req.params.id);

    if (!video) {
        return next(new ErrorHandler('Video not found', 404));
    }

    // Deleting images associated with the product
    for (let i = 0; i < video.clips.length; i++) {
        const result = await cloudinary.v2.uploader.destroy(video.clips[i].public_id)
    }

    await video.remove();

    res.status(200).json({
        success: true,
        message: 'Video is deleted.'
    })

})


// Create new review   =>   /api/v1/review
exports.createVideoReview = catchAsyncErrors(async (req, res, next) => {

    const { rating, comment, videoId } = req.body;

    const review = {
        user: req.user._id,
        name: req.user.name,
        rating: Number(rating),
        comment
    }

    const video = await Video.findById(videoId);

    const isReviewed = video.reviews.find(
        r => r.user.toString() === req.user._id.toString()
    )

    if (isReviewed) {
        video.reviews.forEach(review => {
            if (review.user.toString() === req.user._id.toString()) {
                review.comment = comment;
                review.rating = rating;
            }
        })

    } else {
        video.reviews.push(review);
        video.numOfReviews = video.reviews.length
    }

    video.ratings = video.reviews.reduce((acc, item) => item.rating + acc, 0) / video.reviews.length

    await video.save({ validateBeforeSave: false });

    res.status(200).json({
        success: true
    })

})


// Get Product Reviews   =>   /api/v1/reviews
exports.getVideoReviews = catchAsyncErrors(async (req, res, next) => {
    const video = await Video.findById(req.query.id);

    res.status(200).json({
        success: true,
        reviews: video.reviews
    })
})

// Delete Product Review   =>   /api/v1/reviews
exports.deleteReview = catchAsyncErrors(async (req, res, next) => {

    const video = await Video.findById(req.query.videoId);

    console.log(video);

    const reviews = video.reviews.filter(review => review._id.toString() !== req.query.id.toString());

    const numOfReviews = reviews.length;

    const ratings = video.reviews.reduce((acc, item) => item.rating + acc, 0) / reviews.length

    await Video.findByIdAndUpdate(req.query.videoId, {
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
    