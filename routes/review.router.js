const express = require("express")
const router = express.Router();

const Review = require("../models/Review.model")
const { isAuthenticated } = require("../middleware/jwt.middleware")

//CREATE

router.post("/", isAuthenticated, async(req, res, next)=>{
  try {
    const {comment, author } = req.body

   
    const newReview = await Review.create(req.body)
    res.status(201).json(newReview)
    
  } catch (error) {
    console.log(error)
    next(error)
  }
})

//READ

router.get("/", isAuthenticated, async(req, res, next)=>{
  try {
    const allReviews = await Review.find()
    res.status(200).json(allReviews)
    
  } catch (error) {
    console.log(error)
    next(error)
    res.status(400).json({"message": "There has been an error"})
  }
})

module.exports = router


