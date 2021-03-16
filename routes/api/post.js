const router = require("express").Router();
const postController = require("../../controllers/postController");

// Matches with "/api/user"
router
  .route("/")
  .get(postController.findAll);
  // .post(userController.create);

// Matches with "/api/user/:id"
// router
//   .route("/:id")
//   .get(userController.findById)
//   .put(userController.update)
//   .delete(userController.remove);

module.exports = router;
