const router = require("express").Router();
const userRoutes = require("./user");
const postRoutes = require("./post");
const responseRoutes = require("./response");


// Post routes
router.use("/user", userRoutes);
router.use("/post", postRoutes);
router.use("/response", responseRoutes);
module.exports = router;
