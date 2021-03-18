const router = require("express").Router();
const userRoutes = require("./user");
const postRoutes = require("./post");

// Post routes
router.use("/user", userRoutes);
router.use("/post", postRoutes);

module.exports = router;
