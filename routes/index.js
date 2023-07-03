const router = require("express").Router();

// router.use("/auth", require("./auth.routes")) //api/auth
router.use("/ad", require("./ad.router"))  //api/ad

router.use("/user", require("./auth.routes"))
module.exports = router;
