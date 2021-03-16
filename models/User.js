const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  neighborhood: String,
  password: { type: String, required: true },
  date: { type: Date, default: Date.now}
  //posts: {type:Array}
  //requests: {type:Array} after create psosts and requests
});

const User = mongoose.model("User", userSchema);

module.exports = User;