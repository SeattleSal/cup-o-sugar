// users
const db = require("../models");

module.exports = {
  // getAllUsers

  findAll: function (req, res) {
    db.User.find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  

  
};



