const router = require("express").Router();
const postController = require("../../controllers/postController");
const cloudinary = require("../../utils/cloudinary");
const upload = require("../../utils/multer");
const db = require("../../models");
const authenticatedUser = require("../middleware/authenticateUser");

// Matches with "/api/post"
router
  .route("/")
  .get(postController.findAll)
  .post(authenticatedUser, upload.single("image"), postController.create);

// Matches with "/api/post/:id"
router
  .route("/:id")
  // .get(postController.findById)
  .get(authenticatedUser, postController.findPostsByUser)
  .put(postController.update)
  .delete(postController.remove);

// matches with "/api/post/user/:userId"
// router.route("/user").get(postController.findPostsByUser);

module.exports = router;
