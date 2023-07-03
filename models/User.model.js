// models/User.model.js

const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const userSchema = new Schema({
  email: { 
    type: String, unique: true, required: true 
  },
  password: {
     type: String, required: true 
    },
  name:{
    type: String, required: true 
  },
  reviews: 
    [{type: Schema.Types.ObjectId, ref: "Review"}],
  sales: {
    type: Number
  },
  userType:{
    type: String, 
    enum: ["REGULAR", "MODERATOR"],
    default: "REGULAR"
  },
  image: {
    type: String
  },
  localization: {
    type: String  
  }
});

module.exports = model("User", userSchema);
