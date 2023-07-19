const mongoose = require("mongoose")

const {Schema, model } = mongoose;

const adSchema = new Schema(
  {
    title: {
      type: String,
      required : true
    },
    catergory:{
      type: [String],
      enum: ["option1", "option2", "option3"], 
      required : true 
    },
    description: {
      type: String,
      required : true 
    }, 
    author: { 
      type: Schema.Types.ObjectId, ref: "User" ,
      required: true
    }, 
    image: {
      type: String ,
      required: true
    }, 
    chat: {
      type: Schema.Types.ObjectId, ref: "Chat" 
    }, 
    suspicious: {
      type: Boolean,
      default: false
    },
    suspicionVotes: {
      type: Number,
      default: 0
    },
    localization: {
      type: String  
    },
    reviews: 
    [{type: Schema.Types.ObjectId, ref: "Review"}],
    
    hasBeenSold: {
      type: Boolean,
      default: false
    }, 
   

    buyer: {type: Schema.Types.ObjectId, ref: "Review"}
  }, 
  { 
    timestamps: true
  }
)

const adModel = model("Ad", adSchema)

module.exports = adModel