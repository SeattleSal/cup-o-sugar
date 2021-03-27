const router = require("express").Router();
const userRoutes = require("./user");
const postRoutes = require("./post");
const authenticationRoutes = require("./authentication")

// Post routes
router.use("/user", userRoutes);
router.use("/post", postRoutes);
router.use("/authentication", authenticationRoutes)
module.exports = router;
