const express = require("express")
const router = express.Router();
const Ad = require("../models/Ad.model")
const { isAuthenticated } = require("../middleware/jwt.middleware")
// CRUD

// (C)RUD

router.post("/", isAuthenticated, async(req, res, next)=>{
    try {
      const {title, description, 
      image, chat, suspicious, 
      suspicionVotes, localization } = req.body
      const {_id}= req.payload
      if(!title){
        res.status(400).json({
          "message": "The ad must a have a title"
        })
        return
      }
      if(!description){
        res.status(400).json({
          "message": "The ad must a have a description"
        })
        return
      }
      const newAd = await Ad.create({...req.body, author: _id})
      res.status(201).json(newAd)
    } catch (error) {
      console.log(error)
      next(error)
    }
})

// C(R)UD

// Get all Ads GET → http://localhost:5005/api/ad
router.get("/", isAuthenticated, async(req, res, next)=>{
  try {
    const allAds = await Ad.find()
    res.status(200).json(allAds)  
  } catch (error) {
    console.log(error)
    next(error)
    res.status(400).json({"message": "There has been an error"})
  }
})
// Get all Ads GET → http://localhost:5005/api/ad/maria
router.get("/:id", async(req, res, next)=>{
  // req.params = {:maria : "885"}
  try {
    // const id = req.params.id //= 855
    const {id} = req.params //=885
    const ad = await Ad.findById(id)
    //populate del autor
    res.status(200).json(ad)
  } catch (error) {
    console.log(error)
    next(error)
    res.status(400).json({"message": "There has been an error"})
  }
})

//CRUD → EDIT

router.put("/:id", isAuthenticated, async(req, res, next)=>{
   try {
      const {id} = req.params

      const {title, description, author, 
      image, chat, suspicious, 
      suspicionVotes, localization } = req.body

      if(!title){
        res.status(400).json({
          "message": "The ad must a have a title"
        })
        return
      }
      if(!description){
        res.status(400).json({
          "message": "The ad must a have a description"
        })
        return
      }
      const newAd = await Ad.findByIdAndUpdate(id, req.body, {new: true})
      res.status(200).json(newAd)
      
    } catch (error) {
      console.log(error)
      next(error)
    }

})
//EDIt SOLD
router.put("/sold/:id", isAuthenticated, async(req, res, next)=>{
  try {
     const {id} = req.params
    const {_id: currentUserId} = req.payload
     const { 
       } = req.body
      
     
     
     const updatedAd = await Ad.findOneAndUpdate({_id: id, author:currentUserId}, req.body, {new: true})
     res.status(200).json(updatedAd)
     
   } catch (error) {
     console.log(error)
     next(error)
   }

})

router.delete("/:id", isAuthenticated, async(req, res, next)=>{
  try {
    const {id} = req.params
    await Ad.findByIdAndDelete(id)
    res.status(200).json({message:"The ad with id " + id + "has been deleted"})
    
  } catch (error) {
    console.log(error)
      next(error)
  }
})



module.exports = router

const objectBody = {
    "title": "coche",
    "description": "Esta es una descripcion", 
    "image": "https://skjdhjfhasjkd.jpg", 
    "suspicious": false,
    "localization": "Leganés, Madrid",
    "suspicionVotes": "0"
}

//crear una ruta en postman validacion de venta, quien lo comprado 