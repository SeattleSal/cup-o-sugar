const router = require("express").Router();
const userController = require("../../controllers/userController");

// Matches with "/api/user"
router.route("/").get(userController.findAll);
router.route("/").post(userController.create);

// router.post("/", async( req, res) => {
//   const user = new User({
//     name: req.body.name,
//     email: req.body.email,
//     password: req.body.password,
//     neighborhood: req.body.neighborhood

//   })
//   await user.save();
//   res.send(user);
// })

// Matches with "/api/user/:id"
router
  .route("/:id")
  .get(userController.findById)
  .put(userController.update)
  .delete(userController.remove);

module.exports = router;
