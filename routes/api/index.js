const router = require("express").Router();
const userRoutes = require("./user");

// Post routes
router.use("/user", userRoutes);

module.exports = router;
