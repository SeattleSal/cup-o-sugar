// posts
const db = require("../models");
const cloudinary = require("../utils/cloudinary");
const upload = require("../utils/multer");
const path = require('path');


module.exports = {

    // getAllPosts
    findAll: function (req, res) {
        console.log("Get all posts")
        db.Post.find(req.query)
            .sort({ date: -1 })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },

    // find posts by owner (user) id req.user._id
    findPostsByUser: function (req, res) {
        console.log("Find by user from post Controller")
        const ObjectId = require("mongoose").Types.ObjectId;
        console.log(req.user._id)
        db.Post.find({ owner: new ObjectId(req.user._id) })
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
        // console.log(req.user._id)
        console.log(req.body)
        // responseOwner: req.user._id
        // status: "claimed"
        // db.Post.findOne({_id: req.params.id}).populate("User").execPopulate().then(data => res.json(data));
        // to do - if post is already "claimed", send back error????
        
        // check status
        // findOne => .then(dbModel => { if db.Post.status === "claimed" res.json("Already Claimed")
        // else if // it's open ... })

        db.Post.findOneAndUpdate({ _id: req.params.id }, {...req.body, responseOwner: req.user._id}, { new: true})
            .populate("User")
            .then(dbModel => {
                db.User.findOne({_id: dbModel._doc.owner}).then(user => { 
                    // check if claimed or not
                    // if not claimed, use this line:
                    res.json({...dbModel._doc, owner: user});
                    // else if claimed, send back rejection json?

                })

            })
            .catch(err => res.status(422).json(err));
    },

    // deletePost
    remove: function (req, res) {
        db.Post.findById({ _id: req.params.id })
            .then(dbModel => dbModel.remove())
            // remove cloudinary image
            .then(dbModel => {
                // console.log(dbModel.cloudinary_id)
                cloudinary.v2.uploader.destroy(dbModel.cloudinary_id, function(error,result) {
                    console.log(result, error) });
            })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    }
};







