const router = require("express").Router();
const userController = require("../../controllers/userController");
// const User = require("../../models/User");

// Matches with "/api/user"
router.route("/").get(userController.findAll);
router.route("/").post(userController.create);

// Matches with "/api/user/:id"
router.route("/:id").get(userController.findById);
router.route("/:id").put(userController.update);
router.route("/:id").delete(userController.remove);

module.exports = router;

