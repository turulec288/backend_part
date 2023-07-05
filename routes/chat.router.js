const express = require("express")
const router = express.Router();
const Chat = require("../models/Chat.model")
const { isAuthenticated } = require("../middleware/jwt.middleware")


//Create
router.post("/", isAuthenticated, async(req, res, next)=>{
  try {
    const {chat, users } = req.body

   
    const newChat = await Chat.create(req.body)
    res.status(201).json(newChat)
    
  } catch (error) {
    console.log(error)
    next(error)
  }
})

//READ

router.get("/", isAuthenticated, async(req, res, next)=>{
  try {
    const allChats = await Chat.find()
    res.status(200).json(allChats)
    
  } catch (error) {
    console.log(error)
    next(error)
    res.status(400).json({"message": "There has been an error"})
  }
})
//Read one
router.get("/:id",isAuthenticated, async(req, res, next)=>{
  // req.params = {:maria : "885"}
  try {
    // const id = req.params.id //= 855
    const {id} = req.params //=885
    const ad = await Chat.findById(id)
    res.status(200).json(ad)
    
  } catch (error) {
    console.log(error)
    next(error)
    res.status(400).json({"message": "There has been an error"})
  }
})


//Delete

router.delete("/:id", isAuthenticated, async(req, res, next)=>{
  try {
    const {id} = req.params
    await Chat.findByIdAndDelete(id)
    res.status(200).json({message:"The chat has been deleted"})
    
  } catch (error) {
    console.log(error)
      next(error)
  }
})



module.exports = router