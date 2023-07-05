const express = require("express")
const router = express.Router();

const Message = require("../models/Message.model")
const { isAuthenticated } = require("../middleware/jwt.middleware")

//CREATE

router.post("/", isAuthenticated, async(req, res, next)=>{
  try {
    const {message, author } = req.body

   
    const newMessage = await Message.create(req.body)
    res.status(201).json(newMessage)
    
  } catch (error) {
    console.log(error)
    next(error)
  }
})

//READ

router.get("/", isAuthenticated, async(req, res, next)=>{
  try {
    const allMessages = await Message.find()
    res.status(200).json(allMessages)
    
  } catch (error) {
    console.log(error)
    next(error)
    res.status(400).json({"message": "There has been an error"})
  }
})






module.exports = router
