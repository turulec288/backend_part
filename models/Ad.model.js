const mongoose = require("mongoose")

const {Schema, model } = mongoose;

const adSchema = new Schema(
  {
    title: {
      type: String,
      required : true
    },
    description: {
      type: String,
      required : true 
    }, 
    author: { 
      type: Schema.Types.ObjectId, ref: "User" 
    }, 
    image: {
      type: String
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
    hasBeenSold: {
      type: Boolean,
      default: false
    }
  }
)

const adModel = model("Ad", adSchema)

module.exports = adModel