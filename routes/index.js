const router = require("express").Router();

router.use("/auth", require("./auth.routes")) //api/auth
router.use("/ad", require("./ad.router"))  //api/ad
router.use("/reviews", require("./review.router"))  
router.use("/user", require("./user.router"))
module.exports = router;
