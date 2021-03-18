const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const User = require("./User");
const Post = require("./Post")

const responseSchema = new Schema({
  owner: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  post: {type: Schema.Types.ObjectId, ref: 'Post', required: true},
  chosen: {type: Boolean, default: false}, 
});

const Response = mongoose.model("Response", responseSchema);

module.exports = Response;
