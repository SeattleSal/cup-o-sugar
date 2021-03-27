// posts
const db = require("../models");
const cloudinary = require("../utils/cloudinary");
const upload = require("../utils/multer");
const path = require('path');


module.exports = {

    // getAllPosts
    findAll: function (req, res) {
        db.Post.find(req.query)
            .sort({ date: -1 })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },

    // find posts by owner (user) id
    findByUser: function (req, res) {
        const ObjectId = require("mongoose").Types.ObjectId;
        console.log(req.params.id)
        db.Post.find({ owner: new ObjectId(req.params.id) })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },

    // getPostBy Post Id
    findById: function (req, res) {
        db.Post.findById(req.params.id)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },

    // createPost for logged in user
    create: async(req, res) => {
        // logged in user id = req.user._id
        try {
            console.log(req.file.path)
            // upload image to cloudinary
            const result = await cloudinary.uploader.upload(req.file.path,
                {
                    upload_preset: 'cuposugar'
                });
            // create post body with form data and cloudinary secure_url and public_id
            const value = {
                ...req.body,
                owner: req.user._id,
                image: result.secure_url,
                cloudinary_id: result.public_id
            }
            const model = await db.Post.create(value);
            console.log(value, model);
            res.json(model);
        }
        catch(err) {
            console.log(err);
        }
    },

    // updatePost
    update: function (req, res) {
        console.log(req.params.id)
        console.log(req.body)
        db.Post.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true})
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },

    // deletePost
    remove: function (req, res) {
        db.Post.findById({ _id: req.params.id })
            .then(dbModel => dbModel.remove())
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    }
};







