const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Post = require("./Post");
const Response = require("./Response");

const userSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  neighborhood: String,
  date: { type: Date, default: Date.now},
  posts: [{ type: Schema.Types.ObjectId, ref: 'Post'}],
  responses: [{ type: Schema.Types.ObjectId, ref: 'Response'}],
  
});

const User = mongoose.model("User", userSchema);

module.exports = User;
