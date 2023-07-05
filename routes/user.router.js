const express = require("express")
const router = express.Router();
const User = require("../models/User.model")
const { isAuthenticated } = require("../middleware/jwt.middleware")

//(C)RUD → signup

//C(R)UD

router.get("/all", isAuthenticated,  async(req, res, next)=>{
  try {

    const allUser = await User.find()
    res.status(200).json(allUser)

  } catch (error) {
    console.log(error)
    next(error)
  }
})

// router.get("/al  lModerator", async(req, res, next)=>{
//   try {
//     const allUser = await User.find({userType : "MODERATOR"})
//     res.status(200).

    
//   } catch (error) {
//     console.log(error)
//     next(error)
//   }
// })




module.exports = router