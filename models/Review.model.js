const {Schema, model} = require("mongoose")

const reviewSchema = new Schema(
  {
    comment:{
      type: String,
      maxlength: 100
    }, 
    author: { 
      type: Schema.Types.ObjectId, ref: "User"
    }
  },
  
  { timestamps: true }
)

module.exports = model("Reviews", reviewSchema)