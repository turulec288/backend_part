const {Schema, model} = require("mongoose")

const reviewSchema = new Schema(
  {
    comment:{
      type: String,
      maxlength: 100
    }, 
    author: { 
      type: Schema.Types.ObjectId, ref: "User"
    }, 
    ad: 
      {type: Schema.Types.ObjectId, ref: "Ad"}
  },
  
  { timestamps: true }
)

module.exports = model("Reviews", reviewSchema)