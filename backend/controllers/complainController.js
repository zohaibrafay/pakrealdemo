const Complain= require("../models/complain");
const catchAsyncErrors = require('../middlewares/catchAsyncErrors');


// exports.complain = catchAsyncErrors(async (req, res, next) => {

//   // req.body.user = req.user.id;
//   const d={
//         name:req.body.name,
//         email:req.body.email,
//         phone:req.body.phone,
//         complain:req.body.complain}=req.body;
//   const pack = await Complain.create(d);
//   res.status(201).json({
//     success: true,
//     pack
//   })
// })



exports.newComplain = catchAsyncErrors(async (req, res, next) => {

  const {name,email,phone,complaint} =req.body;
  const complain =await  Complain.create({
    name,
    email,
   phone,
   complaint
  })
  await complain.save();
  res.status(200).json({
    success: true
})
  })

  // try{
  // const d={
  //   name:req.body.name,
  //   email:req.body.email,
  //   phone:req.body.phone,
  //   complaint:req.body.complaint}=req.body;
  // const complain =await Complain.create(d)
//     ,{ new: true,
//     runValidators: true,
//     useFindAndModify: false 
// })
// await complain.save();
//         res.status(201).json({message:"User messaged successfully"});
  //       if (complain) return res.json({ msg: "Message added successfully." });
  //   else return res.json({ msg: "Failed to add message to the database" });
  // } catch (ex) {
  //   next(ex);
  // }
//   res.status(200).json({
//     success: true
// })
//   })




  exports.getComplain = catchAsyncErrors(async (req, res, next) => {
    const complains = await Complain.find();
  
    res.status(200).json({
        success: true,
        complains
    })
  })


  exports.deleteComplain = catchAsyncErrors(async (req, res, next) => {
    const complain = await Complain.findById(req.params.id);
  
    if (!complain) {
        return next(new ErrorHandler(`Complain does not found with id: ${req.params.id}`))
    }
    await complain.remove();
    res.status(200).json({
        success: true,
    })
  })
