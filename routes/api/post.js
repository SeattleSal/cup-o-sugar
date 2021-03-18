const router = require("express").Router();
const postController = require("../../controllers/postController");

// Matches with "/api/user"

router
    .route("/")
    .get(postController.findAll)
    .post(postController.create);

// Matches with "/api/posts"    //check this?
router.post("/api/post", ({ body }, res) => {
    db.Post.create({

        name: body.name,
        email: body.email,
        password: body.password,
        neighborhood: body.neighborhood

    })
        .then((dbPost) => {
            res.json(dbPost);
        })
        .catch(err => {
            console.log(err);
            res.status(401).json(err);
        });
});

// Matches with "/api/posts/:id"
router
    .route("/:id")
    .get(postController.findById)
    .put(postController.update)
    .delete(postController.remove);




module.exports = router;
