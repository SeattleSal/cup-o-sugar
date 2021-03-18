const db = require("../models");

module.exports = {

    // getAllResponses
    findAll: function (req, res) {
        db.Response.find(req.query)
            .sort({ date: -1 })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    // getResponsesByUser - take in id from params

    findByUser: function (req, res) {
        db.Response.find({ owner: req.params.id })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));


    },


    // getResponseById
    findById: function (req, res) {
        db.Response.findById(req.params.id)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));


    },

    // createResponse
    create: function (req, res) {
        console.log(req.body)
        db.Response.create(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },

    // updateResponse
    update: function (req, res) {
        db.Response.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true})
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },

    // deleteResponse
    remove: function (req, res) {
        db.Response.findById({ _id: req.params.id })
            .then(dbModel => dbModel.remove())
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    }
};




