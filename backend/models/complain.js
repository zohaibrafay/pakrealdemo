const mongoose = require("mongoose");

const complainSchema = mongoose.Schema(
  {
    // message: {
    //   text: { type: String, required: true },
    // },
    // users: Array,
    // sender: {
    //   type: mongoose.Schema.Types.ObjectId,
    //   ref: "User",
    //   required: true,
    // },
    // complains:[
    //   {
          name:{
              type:String,
              required:true
          },
          email:{
              type:String,
              required:true
          },
          phone:{
              type:String,
              required:true
          },
          complaint:{
              type:String,
              required:true
          }
  //     }
  // ],
  }
  ,
  {
    timestamps: true,
  }
);


module.exports = mongoose.model("Complain", complainSchema);