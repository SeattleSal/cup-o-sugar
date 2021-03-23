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
    // getPostsByUser - take in id from params

    findByUser: function (req, res) {
        db.Post.find({ owner: req.params.id })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },


    // getPostById
    findById: function (req, res) {
        db.Post.findById(req.params.id)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },

    // createPost
    create: async(req, res) => {
        // console.log(req.body)
        try {
            // console.log(req.body)
            // const fileStr = req.body.path;
            // const uploadedResponse = await cloudinary.uploader.upload(fileStr,
            //     {
            //         upload_preset: 'cuposugar'
            //     });
            //     console.log(uploadedResponse);
            //     res.json({msg: "image uploaded"});
            console.log(req.file.path)
            const result = await cloudinary.uploader.upload(req.file.path,
                {
                    upload_preset: 'cuposugar'
                });
            // res.json(result);
            const value = {
                ...req.body,
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







