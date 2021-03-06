// users
const { User} = require("../models");

module.exports = {
  // get all users
  findAll: function (req, res) {
    User.find(req.query)
      .sort({ date: -1 })
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  // return authenticated user info
  findUser: function (req, res) { 
    User.find(req.user._id)
    .then((userData) => res.json(userData))
    .catch((err) => res.status(422).json(err));
  },
  // get user by id
  // create different function for find User by auth ID
  findById: function (req, res) {
    console.log("calling find by: " + req.params.id)

    User.findById(req.params.id)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  // createUser
  create: function (req, res) {
    console.log(req.body)
    User.create(req.body)
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err))
  },
  // updateUser
  update: function (req, res) {
    console.log("update: " + req.params.id)
    console.log("update with: " + req.body)
    User.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true})
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  // deleteUser
  remove: function (req, res) {
    console.log("delete: " + req.params.id)
    User.findById({ _id: req.params.id })
      .then((dbModel) => dbModel.remove())
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  }
};
